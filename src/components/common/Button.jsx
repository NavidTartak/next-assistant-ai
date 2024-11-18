import React from "react";
import Loader from "./Loader";

const Button = ({
  width,
  height,
  disabled,
  border,
  bg,
  color,
  type,
  onClick,
  children,
  loading,
  loadingFill,
  rounded,
  ...props
}) => {
  return (
    <button
      type={type ? type : "button"}
      onClick={onClick}
      disabled={disabled || loading}
      className={`select-none ${
        rounded || "rounded-[11px]"
      } text-[13px] md:text-[14px] font-theme-regular ${
        width ? width : "w-full"
      } ${
        height ? height : "h-[38px]"
      } flex justify-center items-center gap-x-1 !outline-none ${
        border ? border : "border-none"
      } shadow-md disabled:opacity-75 hover:shadow-lg hover:opacity-90 ${
        bg ? bg : "bg-gray-800 dark:bg-gray-100"
      } ${
        color ? color : "text-white dark:text-gray-950"
      } transition-all duration-200`}
      {...props}
    >
      {loading ? (
        <Loader
          bgTextColor="text-transparent"
          width="w-5"
          height="h-5"
          fillColor={loadingFill ? loadingFill : ""}
        />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
