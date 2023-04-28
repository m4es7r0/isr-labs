import { FC } from "react";

const TextArea: FC<Partial<HTMLTextAreaElement>> = ({
  name,
  value,
  required,
  onchange,
  placeholder,
}) => {
  return (
    <textarea
      className="placeholder:font-montserrat placeholder:text-sm placeholder:text-[#212121] resize-none min-h-[154px] max-h-[306px] min-w-full bg-transparent p-8 border border-[#212121] rounded-[52px] text-[#212121] text-sm font-montserrat"
      name={name}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onchange as any}
      onInput={(e) => {
        e.currentTarget.style.height = "";
        e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
      }}
      style={{ scrollbarWidth: "none" }}
    ></textarea>
  );
};

export default TextArea;
