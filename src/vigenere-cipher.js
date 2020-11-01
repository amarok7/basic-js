const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor() {

  }

  encrypt(message, key) {
    if (!message || !key) throw new Error();
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error();
  }
}

module.exports = VigenereCipheringMachine;
