const CryptoJS = require("crypto-js");
const encrypt = (value, key) => {
  let encryptedText = CryptoJS.AES.encrypt(value, key);
  return encryptedText.toString();
};
//  CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8)
module.exports = encrypt;
