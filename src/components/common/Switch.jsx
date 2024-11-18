import React from "react";

const Switch = ({
  value,
  onChangeTrue,
  onChangeFalse,
  falseLabel,
  trueLabel,
  className,
}) => {
  return (
    <div
      className={`flex justify-center items-center gap-x-1 ${
        className && className
      }`}
      dir="ltr"
    >
      {falseLabel ? falseLabel : null}
      <button
        onClick={!value ? onChangeTrue : onChangeFalse}
        type="button"
        className="w-[46px] h-[24px] bg-gray-200 dark:bg-slate-700 rounded-full relative shadow-sm cursor-pointer"
      >
        <span
          className={`absolute transition-all duration-200 bg-slate-900 dark:bg-gray-50 top-[3px] bottom-[3px] w-[18px] rounded-full ${
            !value ? "left-[3px]" : "left-[25px]"
          }`}
        ></span>
      </button>
      {trueLabel ? trueLabel : null}
    </div>
  );
};

export default Switch;
