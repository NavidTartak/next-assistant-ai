import React from "react";
import Loader from "./Loader";
const Checkbox = ({
  id,
  label,
  labelColor,
  onCheckTrue,
  onCheckFalse,
  disabled,
  loading,
  checked,
  accentColor,
}) => {
  return (
    <div className="w-fit flex items-center select-none">
      {loading ? (
        <div className="pr-1">
          <Loader
            width="w-[15px]"
            height="h-[15px]"
            fillColor="fill-slate-500"
          />
        </div>
      ) : (
        <input
          checked={checked}
          disabled={disabled}
          onChange={async (e) => {
            if (e.target.checked) {
              if (onCheckTrue) {
                await onCheckTrue();
              }
            } else {
              if (onCheckFalse) {
                await onCheckFalse();
              }
            }
          }}
          className={`scale-[1.2] ${
            accentColor ? accentColor : "accent-blue-500"
          } ${!disabled && "cursor-pointer"}`}
          id={id}
          type="checkbox"
        />
      )}
      <label
        className={`pr-2 text-[13px] mt-[3px] ${
          disabled || loading
            ? "text-slate-400"
            : labelColor
            ? `${labelColor} cursor-pointer`
            : "text-slate-600 cursor-pointer"
        }`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
