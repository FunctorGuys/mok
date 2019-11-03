import CryptoJS from "crypto-js";
import config from "./configs.json";
export const decrypt = value => {
  let videoID = CryptoJS.AES.decrypt(value, config.linkSecretKey).toString(
    CryptoJS.enc.Utf8
  );
  return videoID;
};
