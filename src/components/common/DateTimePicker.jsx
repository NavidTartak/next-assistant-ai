import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_fa";
import { MdDateRange } from "react-icons/md";
import { IoClose } from "react-icons/io5";
const DateTimePicker = ({
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
  borderErrorColor,
  textErrorColor,
  labelColor,
  className,
  onClose,
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
      <div className="w-full relative">
        <DatePicker
          containerClassName="w-full"
          name={name}
          id={id}
          disabled={disabled}
          range={false}
          placeholder={placeholder}
          format="YYYY/MM/DD"
          calendar={persian}
          locale={persian_en}
          value={value}
          onFocusedDateChange={(date) => onChange(new Date(date))}
          inputClass={`pl-[40px] text-left ${className && className} ${
            height ? height : "h-[36px]"
          } ${
            fontSize ? fontSize : "text-[13.5px] placeholder:text-[13.5px]"
          } ${
            withoutErrorText
              ? ""
              : errorText
              ? borderErrorColor
                ? borderErrorColor
                : "border-red-600"
              : "border-gray-300"
          } border !outline-none w-full rounded-[11px] px-2 transition-all duration-200 placeholder:text-gray-500 disabled:bg-gray-100 disabled:text-gray-600 placeholder:text-right`}
          {...props}
        />
        <div
          onClick={value ? onClose : null}
          className={`${
            value && "cursor-pointer"
          } left-0 w-[40px] flex justify-center items-center top-0 bottom-0 absolute`}
        >
          {value ? (
            <IoClose className="text-slate-500" size={20} />
          ) : (
            <MdDateRange className="text-slate-500" size={20} />
          )}
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

export default DateTimePicker;
