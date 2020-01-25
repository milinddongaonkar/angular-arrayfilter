export class ValidationService {

  constructor() { }
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      required: "Required",
      invalidAccount: "Is invalid Account number",
      invalidAmount: "Invalid Ammount",
      //minlength: `Minimum length ${validatorValue.requiredLength}`
    };

    return config[validatorName];
  }
  static accountValidator(control) {
    if (
      control.value.match(
        /^[0-9]*$/
      )
    ) {
      return null;
    } else {
      return { invalidAccount: true };
    }
  }
  static amountValidator(control) {
    if (
      control.value.match(
        /^[0-9]*$/
      )
    ) {
      return null;
    } else {
      return { invalidAmount: true };
    }
  }
}
