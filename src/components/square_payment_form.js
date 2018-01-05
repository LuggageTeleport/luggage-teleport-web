import React, { Component } from 'react';
import Script from 'react-load-script';

class SquarePaymentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // state props go in here
      appId: '',
      paymentForm: null,
      scriptCreated: false,
      scriptErrored: false,
      scriptLoaded: false
    };

    if (!this.props.appId && !this.props.get) {
      console.warn('No appId or appIdResource sent for props of SquarePaymentForm');
    }

    this.scriptCreated = this.scriptCreated.bind(this);
    this.scriptErrored = this.scriptErrored.bind(this);
    this.scriptLoaded = this.scriptLoaded.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
    this.generateNonce = this.generateNonce.bind(this);
  }

  static defaultProps = {
    // stuff that's sent to square's api
    appId: '',
    get: '',
    inputClass: 'sq-input',
    inputStyles: [{
      // color: '#222',
      // fontFamily: 'serif',
      // fontSize: '15px'
    }],
    cardNumber: {
      elementId: 'sq-card-number',
      placeholder: 'E.g. XXXX-XXXX-XXXX-XXXX',
    },
    cvv: {
      elementId: 'sq-cvv',
      placeholder: 'E.g. XXX',
    },
    expirationDate: {
      elementId: 'sq-expiration-date',
      placeholder: 'MM/YY'
    },
    postalCode: {
      elementId: 'sq-postal-code',
      placeholder: 'E.g. XXXXX'
    },

    // props to plug in that aren't square-based
    submitText: 'Submit Payment',

    // styling-based stuff for the component
    componentWrapperClass: 'sq-component-wrapper',
    formWrapperClass: 'sq-form-wrapper',
    fieldsWrapperClass: 'sq-fields-wrapper',
    buttonWrapperClass: 'sq-button-wrapper',
    inputWrapperClass: 'sq-input-wrapper',
    cardWrapperClass: 'sq-card-wrapper',
    cvvWrapperClass: 'sq-cvv-wrapper',
    expirationWrapperClass: 'sq-expiration-wrapper',
    postalWrapperClass: 'sq-postal-wrapper',

    onGetAppIdError: (axiosError) => { console.warn('No onAppIdResourceError listener sent for props of SquarePaymentForm'); },
    onScriptCreated: () => { },//{ console.warn('No onScriptCreated listener sent for props of SquarePaymentForm'); },
    onScriptError: () => { console.warn('No onScriptError listener sent for props of SquarePaymentForm'); },
    onScriptLoaded: () => { },//{ console.warn('No onScriptLoaded listener sent for props of SquarePaymentForm'); },

    onPaymentFormLoaded: () => { }, //{ console.warn('No onPaymentFormLoaded listener sent for props of SquarePaymentForm'); },
    onInputEventReceived: (inputEvent) => { }, //{ console.warn('No onInputEventReceived listener sent for props of SquarePaymentForm'); },
    onUnsupportedBrowserDetected: () => { console.warn('No onPaymentFormLoaded listener sent for props of SquarePaymentForm'); },
    onNonceRequested: () => {}, //{ console.warn('No onNonceRequest listener sent for props of SquarePaymentForm'); },
    onNonceGenerated: (nonce, cardData) => { console.warn('No onUnsupportedBrowserDetected listener sent for props of SquarePaymentForm'); },
    onNonceError: (errors) => { console.warn('No onNonceError listener sent for props of SquarePaymentForm'); },
  };

  componentWillUnmount() {
    if (this.props.onRef) {
      this.props.onRef(undefined)
    }
    if (this.state.paymentForm) this.state.paymentForm.destroy();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      (React.Children.count(this.props.children) > 0) ||
      (!this.state.scriptLoaded && nextState.scriptLoaded)
    );
  }
  componentDidMount() {
    if (this.props.onRef) {
      this.props.onRef(this)
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (!(!this.state.scriptLoaded && nextState.scriptLoaded)) {
      return;
    }

    let prom = new Promise((resolve, reject) => {
      resolve(nextProps.appId);
    });

    prom.then((appId) => {
      // got the app id, load the form now
      const paymentForm = new window.SqPaymentForm({
        applicationId: appId,
        inputClass: this.props.inputClass,
        inputStyles: this.props.inputStyles,
        cardNumber: this.props.cardNumber,
        cvv: this.props.cvv,
        expirationDate: this.props.expirationDate,
        postalCode: this.props.postalCode,
        callbacks: {
          cardNonceResponseReceived: (errors, nonce, cardData) => {
            if (errors && errors.length) {
              this.props.onNonceError(errors);
            } else {
              this.props.onNonceGenerated(nonce, cardData);
            }
          },
          paymentFormLoaded: () => {
            // handle here
            this.props.onPaymentFormLoaded();
          },
          inputEventReceived: (inputEvent) => {
            // handle here
            this.props.onInputEventReceived(inputEvent);
          },
          unsupportedBrowserDetected: () => {
            this.props.onUnsupportedBrowserDetected();
          }
        }
      });

      paymentForm.build();

      this.setState({
        appId: appId,
        paymentForm: paymentForm
      });
    });

    prom.catch((error) => {
      this.props.onGetAppIdError(error);
    });




  }

  scriptCreated() {
    this.setState({
      scriptCreated: true
    });

    this.props.onScriptCreated();
  }

  scriptErrored() {
    this.setState({
      scriptError: true
    });

    this.props.onScriptError();
  }

  scriptLoaded() {
    this.setState({
      scriptLoaded: true
    });

    this.props.onScriptLoaded();
  }

  generateNonce(evt) {
    if (this.state.scriptLoaded && this.state.paymentForm) {
      this.props.onNonceRequested();
      this.state.paymentForm.requestCardNonce();
    } else {
      console.warn('Premature generateNonce call in SquarePaymentForm');
    }
  }

  renderChildren() {
    if (React.Children.count(this.props.children) > 0) {
      return this.props.children;
    } else {
      return (
        <div className={this.props.fieldsWrapperClass}>
    <div className={this.props.inputWrapperClass + ' ' + this.props.cardWrapperClass}>
    <label>Card Number</label>
      <div id={this.props.cardNumber.elementId}></div>
      </div>
      <div className={this.props.inputWrapperClass + ' ' + this.props.cvvWrapperClass}>
    <label>CVV</label>
      <div id={this.props.cvv.elementId}></div>
      </div>
      <div className={this.props.inputWrapperClass + ' ' + this.props.expirationWrapperClass}>
    <label>Expiration</label>
      <div id={this.props.expirationDate.elementId}></div>
      </div>
      <div className={this.props.inputWrapperClass + ' ' + this.props.postalWrapperClass}>
    <label>Postal Code</label>
      <div id={this.props.postalCode.elementId}></div>
      </div>
      </div>
    );
    }
  }

  render() {
    return (
        // markup/subcomponents go here
      <div className={this.props.componentWrapperClass}>
  <Script url="https://js.squareup.com/v2/paymentform"
    onCreate={this.scriptCreated}
    onError={this.scriptErrored}
    onLoad={this.scriptLoaded}
  />

  <div className={this.props.formWrapperClass}>

    {this.renderChildren()}
    </div>
    </div>
  );
  }
}

export default SquarePaymentForm;