import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  isPrefix?: boolean;
  namePrefix?: string;
  register?: UseFormRegisterReturn;
}

export function InputBox({
  register,
  isPrefix = false,
  namePrefix,
  ...rest
}: InputBoxProps) {
  return (
    <div className="border border-transparent text-gray-200 py-3 flex gap-1 focus-within:border-green-500 rounded bg-gray-900">
      {isPrefix && <span className="text-gray-500 pl-2">{namePrefix}/</span>}
      <input
        type="text"
        className={`bg-transparent w-full rounded outline-none border-transparent h-full ${
          !isPrefix && "pl-2"
        }`}
        {...register}
        {...rest}
      />
    </div>
  );
}
