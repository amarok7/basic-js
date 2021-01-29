const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if(!message || !key) throw new Error();
    const maxLength = message.length;
    let result = [];
    let step = -1;
    for (let i = 0; i < maxLength; i++) {
      if (this.alphabet.indexOf(message[i].toUpperCase()) > -1) {
        step++;
        let num = (this.alphabet.indexOf(message[i].toUpperCase()) + this.alphabet.indexOf(key[step % key.length].toUpperCase())) % this.alphabet.length;
        result.push(this.alphabet[num]);
      } else {
        result.push(message[i]);
      }
    }
    return this.mode ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {
    if(!message || !key) throw new Error();
    const maxLength = message.length;
    let result = [];
    let step = -1;
    for (let i = 0; i < maxLength; i++) {
      if (this.alphabet.indexOf(message[i].toUpperCase()) > -1) {
        step++;
        let num = (this.alphabet.indexOf(message[i].toUpperCase()) + this.alphabet.length - this.alphabet.indexOf(key[step % key.length].toUpperCase())) % this.alphabet.length;
        result.push(this.alphabet[num]);
      } else {
        result.push(message[i]);
      }
    }
    return this.mode ? result.join('') : result.reverse().join('');
  }
}


module.exports = VigenereCipheringMachine;
