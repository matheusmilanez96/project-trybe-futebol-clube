export default class Email {
  private static emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  static validate(email: string): boolean {
    return Email.emailReg.test(email);
  }
}
