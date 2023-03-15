import { ITextarea } from "./@types";

export const Textarea = ({
  className,
  name,
  rules,
  register,
  placeholder,
  onClick,
  isDisabled = false,
  id,
  value,
  maxLength,
  rows = 6,
}: ITextarea) => {
  return (
    <textarea
      rows={rows}
      onClick={onClick}
      {...register(name, rules)}
      maxLength={maxLength}
      disabled={isDisabled}
      placeholder={placeholder}
      id={id}
      value={value}
      className={`${className} resize-none placeholder:italic border w-full border-slate-400 rounded px-5 py-2 ease-in-out form-control focus:outline-none focus:border-0 focus:border-primary-30 focus:ring-primary-30 focus:ring-1`}
    />
  );
};
