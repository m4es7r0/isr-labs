import clsx from "clsx";
import { FC } from "react";

const Input: FC<Partial<HTMLInputElement>> = ({
  type = "text",
  required,
  value,
  name,
  placeholder,
  onchange,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onchange as any}
      placeholder={placeholder}
      required={required}
      className={clsx(
        "placeholder:font-montserrat placeholder:text-sm placeholder:text-[#212121] bg-transparent min-w-full py-4 px-8 border border-[#212121] rounded-[52px] text-[#212121] text-sm font-montserrat"
      )}
    />
  );
};

export default Input;
