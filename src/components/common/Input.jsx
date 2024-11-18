import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
const Input = ({
  width,
  height,
  label,
  withoutLabel,
  errorText,
  withoutErrorText,
  fontSize,
  placeholder,
  name,
  id,
  disabled,
  value,
  onChange,
  rows,
  dir,
  borderErrorColor,
  textErrorColor,
  labelColor,
  className,
  password,
  search,
  type,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className={`${
        width ? width : "w-full"
      } flex flex-col gap-y-[6px] select-none`}
    >
      {withoutLabel ? null : (
        <label
          className={`text-[13px] md:text-[14px] ${
            labelColor ? labelColor : "text-slate-700"
          }`}
        >
          {label ? label : <>&nbsp;</>}
        </label>
      )}
      {rows ? (
        <textarea
          type={type ? type : "text"}
          rows={typeof rows === "number" ? rows : 3}
          onChange={onChange}
          value={value}
          disabled={disabled}
          id={id ? id : null}
          name={name ? name : null}
          placeholder={placeholder ? placeholder : ""}
          className={`${className && className} ${
            fontSize ? fontSize : "text-[14px] placeholder:text-[13.5px]"
          } ${
            withoutErrorText
              ? ""
              : errorText
              ? borderErrorColor
                ? borderErrorColor
                : "border-red-600"
              : "border-gray-200 dark:border-slate-700"
          } border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 dark:disabled:bg-slate-800 !outline-none leading-6 w-full resize-none rounded-[11px] px-2 py-1.5 transition-all duration-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 disabled:bg-gray-100 disabled:text-gray-600 ${
            dir
              ? dir === "rtl"
                ? "placeholder:text-right"
                : "placeholder:text-left"
              : "placeholder:text-right"
          }`}
          dir={dir ? dir : "rtl"}
          {...props}
        />
      ) : password ? (
        <div className="w-full relative">
          <input
            type={showPassword ? "text" : "password"}
            onChange={onChange}
            value={value}
            disabled={disabled}
            id={id ? id : null}
            name={name ? name : null}
            placeholder={placeholder ? placeholder : ""}
            className={`${
              value && (!dir || dir === "rtl" ? "pl-[50px]" : "pr-[50px]")
            } ${className && className} ${height ? height : "h-[36px]"} ${
              fontSize ? fontSize : "text-[14px] placeholder:text-[13.5px]"
            } ${
              withoutErrorText
                ? ""
                : errorText
                ? borderErrorColor
                  ? borderErrorColor
                  : "border-red-600"
                : "border-gray-300"
            } border !outline-none w-full rounded-[11px] px-2 transition-all duration-200 placeholder:text-gray-500 disabled:bg-gray-100 disabled:text-gray-600 ${
              dir
                ? dir === "rtl"
                  ? "placeholder:text-right"
                  : "placeholder:text-left"
                : "placeholder:text-right"
            }`}
            dir={dir ? dir : "rtl"}
            {...props}
          />
          {value && (
            <div
              className={`${
                !dir || dir === "rtl" ? "left-0" : "right-0"
              } w-[50px] flex justify-center items-center top-0 bottom-0 absolute`}
            >
              {!showPassword ? (
                <VscEye
                  onClick={() => setShowPassword(true)}
                  className="cursor-pointer text-slate-800"
                  size={22}
                />
              ) : (
                <VscEyeClosed
                  onClick={() => setShowPassword(false)}
                  className="cursor-pointer text-slate-800"
                  size={22}
                />
              )}
            </div>
          )}
        </div>
      ) : search ? (
        <div className="w-full relative">
          <input
            type={"text"}
            onChange={onChange}
            value={value}
            disabled={disabled}
            id={id ? id : null}
            name={name ? name : null}
            placeholder={placeholder ? placeholder : ""}
            className={`${!dir || dir === "rtl" ? "pl-[50px]" : "pr-[50px]"} ${
              className && className
            } ${height ? height : "h-[36px]"} ${
              fontSize ? fontSize : "text-[14px] placeholder:text-[13.5px]"
            } ${
              withoutErrorText
                ? ""
                : errorText
                ? borderErrorColor
                  ? borderErrorColor
                  : "border-red-600"
                : "border-gray-300"
            } border !outline-none w-full rounded-[11px] px-2 transition-all duration-200 placeholder:text-gray-500 disabled:bg-gray-100 disabled:text-gray-600 ${
              dir
                ? dir === "rtl"
                  ? "placeholder:text-right"
                  : "placeholder:text-left"
                : "placeholder:text-right"
            }`}
            dir={dir ? dir : "rtl"}
            {...props}
          />
          <div
            className={`${
              !dir || dir === "rtl" ? "left-0" : "right-0"
            } w-[50px] flex justify-center items-center top-0 bottom-0 absolute`}
          >
            <BiSearchAlt2 className="text-slate-500" size={20} />
          </div>
        </div>
      ) : (
        <input
          type={type ? type : "text"}
          onChange={onChange}
          value={value}
          disabled={disabled}
          id={id ? id : null}
          name={name ? name : null}
          placeholder={placeholder ? placeholder : ""}
          className={`${className && className} ${
            height ? height : "h-[36px]"
          } ${fontSize ? fontSize : "text-[14px] placeholder:text-[13.5px]"} ${
            withoutErrorText
              ? ""
              : errorText
              ? borderErrorColor
                ? borderErrorColor
                : "border-red-600"
              : "border-gray-300"
          } border !outline-none w-full rounded-[11px] px-2 transition-all duration-200 placeholder:text-gray-500 disabled:bg-gray-100 disabled:text-gray-600 ${
            dir
              ? dir === "rtl"
                ? "placeholder:text-right"
                : "placeholder:text-left"
              : "placeholder:text-right"
          }`}
          dir={dir ? dir : "rtl"}
          {...props}
        />
      )}

      {withoutErrorText ? null : (
        <label
          className={`text-[12px] ${
            textErrorColor ? textErrorColor : "text-red-600"
          }`}
        >
          {errorText ? errorText : <>&nbsp;</>}
        </label>
      )}
    </div>
  );
};

export default Input;
