import { Succeed, Failed } from "./OperationHelper";

export const CheckFile = (file, maxSize) => {
  try {
    if (
      maxSize !== null &&
      maxSize !== undefined &&
      typeof maxSize !== "number"
    ) {
      return Failed("اندازه مجاز فایل بدرستی ارسال نشده است");
    }
    if (!file || !file.type || !file.size) {
      return Failed("فایل بدرستی ارسال نشده است");
    }
    if (
      [
        "application/octet-stream",
        "application/soap+xml",
        "application/xhtml+xml",
        "text/html",
        "application/x-cdlink",
        "application/x-httpd-php",
        "text/xml",
        "text/x-csharp",
        "application/javascript",
        "application/x-javascript",
        "text/x-vb",
        "application/xml",
        "application/x-msdownload",
        "application/x-msaccess",
        "application/x-sql-server",
        "text/plain",
        "application/x-cd-link",
        "application/x-x509-ca-cert",
        "text/css",
        "application/x-perl",
      ].some((x) => x === file.type)
    ) {
      return Failed("فرمت تصویر بدرستی ارسال نشده است");
    }

    if (maxSize && file.size / 1024 / 1024 > maxSize) {
      return Failed("حجم فایل از حداکثر مجاز بارگزاری بیشتر است");
    }
    return Succeed("فایل برای بارگزاری معتبر است");
  } catch (error) {
    return Failed("اعتبارسنجی فایل با مشکل مواجه شده است");
  }
};
export const CheckImage = (file, maxSize) => {
  try {
    if (
      maxSize !== null &&
      maxSize !== undefined &&
      typeof maxSize !== "number"
    ) {
      return Failed("اندازه مجاز تصویر بدرستی ارسال نشده است");
    }
    if (!file || !file.type || !file.size) {
      return Failed("تصویر بدرستی ارسال نشده است");
    }
    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      return Failed("فرمت تصویر بدرستی ارسال نشده است");
    }
    if (maxSize && file.size / 1024 / 1024 > maxSize) {
      return Failed("حجم تصویر از حداکثر مجاز بارگزاری بیشتر است");
    }
    return Succeed("تصویر برای بارگزاری معتبر است");
  } catch (error) {
    return Failed("اعتبارسنجی تصویر با مشکل مواجه شده است");
  }
};
