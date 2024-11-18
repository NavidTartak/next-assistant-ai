import { toEnglishNumber } from "./FormatHelper";

const moment = require("jalali-moment");
export const persianToGregorian = (jalaliDateStr) => {
  const jalaliDate = moment(jalaliDateStr, "jYYYY-jMM-jDD");
  const gregorianDate = jalaliDate.toDate();
  return gregorianDate.toISOString().split("T")[0];
};
export const GetPersianDateString = (date) => {
  if (!date) {
    return "";
  }
  try {
    const dateString = moment(new Date(date).toISOString()).format(
      "jYYYY/jM/jD"
    );
    return `${dateString.split("/")[0]}/${
      dateString.split("/")[1].length === 2
        ? dateString.split("/")[1]
        : `0${dateString.split("/")[1]}`
    }/${
      dateString.split("/")[2].length === 2
        ? dateString.split("/")[2]
        : `0${dateString.split("/")[2]}`
    }`;
  } catch (error) {
    return "";
  }
};

export const GetPersianDateFullString = (date) => {
  const dayTitle = getPersianDayTitle(date);
  const persianDateString = GetPersianDateString(date);
  if (!dayTitle || !persianDateString) {
    return "";
  }
  const monthTitle = getPersianMonthTitle(persianDateString);
  if (!monthTitle) {
    return "";
  }
  try {
    return `${dayTitle} ، ${
      persianDateString.split("/")[2]
    } ${monthTitle} ماه ${persianDateString.split("/")[0]}`;
  } catch (error) {
    return "";
  }
};

export const GetPersianYear = (date) => {
  try {
    if (!date) {
      return parseInt(moment(new Date().toISOString()).format("jYYYY/jM/jD"));
    }
    return parseInt(
      moment(new Date(date).toISOString()).format("jYYYY/jM/jD").slice("/")[0]
    );
  } catch (error) {
    return parseInt(
      moment(new Date().toISOString()).format("jYYYY/jM/jD").slice("/")[0]
    );
  }
};
const getPersianDayTitle = (date) => {
  if (!date) {
    return "";
  }
  try {
    return [
      "یکشنبه",
      "دوشنبه",
      "سه شنبه",
      "چهارشنبه",
      "پنج شنبه",
      "جمعه",
      "شنبه",
    ][new Date(date).getDay()];
  } catch (error) {
    return "";
  }
};
const getPersianMonthTitle = (persianDateString) => {
  if (!persianDateString) {
    return "";
  }
  try {
    switch (parseInt(toEnglishNumber(persianDateString.split("/")[1]))) {
      case 1:
        return "فروردین";
      case 2:
        return "اردیبهشت";
      case 3:
        return "خرداد";
      case 4:
        return "تیر";
      case 5:
        return "مرداد";
      case 6:
        return "شهریور";
      case 7:
        return "مهر";
      case 8:
        return "آبان";
      case 9:
        return "آذر";
      case 10:
        return "دی";
      case 11:
        return "بهمن";
      case 12:
        return "اسفند";
      default:
        return "";
    }
  } catch (error) {
    return "";
  }
};
