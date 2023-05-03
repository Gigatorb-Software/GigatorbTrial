import React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: "submit";
  processing?: false;
};

export default function Button({
  type,
  className = "",
  processing,
  children = "",
}: Props) {
  return (
    <button
      type={type}
      className={
        `inline-flex items-center px-4 py-2  rounded-full hover:bg-[#000000] font-poppins text-1xl text-white bg-[#00bffe] tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${
          processing && "opacity-25"
        } ` + className
      }
      disabled={processing}
    >
      {children}
    </button>
  );
}
