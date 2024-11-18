import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "./Select.css";
import { PiCaretUpDownLight } from "react-icons/pi";
const Select = ({
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
  selected,
  onChange,
  options,
  dir,
  borderErrorColor,
  textErrorColor,
  labelColor,
  className,
  labelKey,
  ...props
}) => {
  return (
    <div
      className={`${
        width ? width : "w-full"
      } flex flex-col gap-y-[6px] select-none`}
    >
      {withoutLabel ? null : (
        <label
          className={`text-[14px] ${
            labelColor ? labelColor : "text-slate-700"
          }`}
        >
          {label ? label : <>&nbsp;</>}
        </label>
      )}
      <div className="relative">
        <div dir={dir ? dir : "rtl"}>
          <Typeahead
            labelKey={labelKey}
            onChange={onChange}
            selected={selected}
            disabled={disabled}
            name={name}
            id={id}
            placeholder={placeholder}
            inputProps={{
              className: `${
                !dir || dir === "rtl" ? "pl-[50px]" : "pr-[50px]"
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
              } border !outline-none w-full rounded-[11px] px-2 transition-all duration-200 placeholder:text-gray-500 disabled:bg-gray-100 disabled:text-gray-600 placeholder:text-right`,
            }}
            options={options}
            emptyLabel={
              <div className="text-red-600 text-[14px]">نتیجه ای پیدا نشد.</div>
            }
            {...props}
          />
        </div>
        <div
          className={`${
            !dir || dir === "rtl" ? "left-0" : "right-0"
          } w-[43px] flex justify-center items-center top-0 bottom-0 absolute`}
        >
          <PiCaretUpDownLight className="text-slate-800" size={18} />
        </div>
      </div>
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

export default Select;
