import { ArrowRight } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

interface ButtonNextStep extends ButtonHTMLAttributes<HTMLButtonElement> {
  isArrowActive?: boolean;
  title: string;
}

export function ButtonNextStep({
  title,
  isArrowActive = true,
  ...rest
}: ButtonNextStep) {
  return (
    <button
      type="submit"
      className="text-gray-100 bg-green-600 rounded-md p-3 mt-2 flex text-sm font-medium items-center justify-center gap-2 hover:brightness-125 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:brightness-100"
      {...rest}
    >
      {title}
      {isArrowActive && <ArrowRight />}
    </button>
  );
}
