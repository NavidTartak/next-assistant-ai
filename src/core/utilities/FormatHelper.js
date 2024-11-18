export const toPersianNumber = (str) => {
  return str
    .toString()
    .replace(/0/g, "۰")
    .replace(/1/g, "۱")
    .replace(/2/g, "۲")
    .replace(/3/g, "۳")
    .replace(/4/g, "۴")
    .replace(/5/g, "۵")
    .replace(/6/g, "۶")
    .replace(/7/g, "۷")
    .replace(/8/g, "۸")
    .replace(/9/g, "۹")
    .replace(/٠/g, "۰")
    .replace(/١/g, "۱")
    .replace(/٢/g, "۲")
    .replace(/٣/g, "۳")
    .replace(/٤/g, "۴")
    .replace(/٥/g, "۵")
    .replace(/٦/g, "۶")
    .replace(/٧/g, "۷")
    .replace(/٨/g, "۸")
    .replace(/٩/g, "۹");
};
export const toEnglishNumber = (str) => {
  return str
    .toString()
    .replace(/۰/g, "0")
    .replace(/۱/g, "1")
    .replace(/۲/g, "2")
    .replace(/۳/g, "3")
    .replace(/۴/g, "4")
    .replace(/۵/g, "5")
    .replace(/۶/g, "6")
    .replace(/۷/g, "7")
    .replace(/۸/g, "8")
    .replace(/۹/g, "9")
    .replace(/٠/g, "0")
    .replace(/١/g, "1")
    .replace(/٢/g, "2")
    .replace(/٣/g, "3")
    .replace(/٤/g, "4")
    .replace(/٥/g, "5")
    .replace(/٦/g, "6")
    .replace(/٧/g, "7")
    .replace(/٨/g, "8")
    .replace(/٩/g, "9");
};
export const isEmail = (email) => {
  try {
    if (!email) {
      return false;
    }
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  } catch (error) {
    return false;
  }
};
export const isNumeric = (string) => {
  try {
    if (!string) {
      return false;
    }
    return new RegExp("^[0-9]+$").test(toEnglishNumber(String(string)));
  } catch (error) {
    return false;
  }
};
export const isMobile = (string) => {
  try {
    if (isNumeric(string) && string.length === 11 && string.startsWith("09")) {
      return true;
    } else return false;
  } catch (error) {
    return false;
  }
};
export const distinct = (value, index, array) => array.indexOf(value) === index;
export const currencyToNumberString = (str) => {
  try {
    return toEnglishNumber(str.toString().replace(/,/g, ""));
  } catch (error) {
    return "";
  }
};
