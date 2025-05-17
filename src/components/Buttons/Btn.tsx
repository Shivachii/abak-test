import React from "react";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnLabel: string;
  btnType?: "primary" | "secondary" | "tertiary";
  className?: string;
}

export function Btn({ btnLabel, btnType, className, ...props }: BtnProps) {
  return (
    <button
      className={`flex items-center font-medium px-2 py-1 rounded-md w-max ${
        className || ""
      }  ${
        btnType === "primary" ? "bg-primary hover:opacity-80 text-gray-900" : ""
      }
      
      ${
        btnType === "secondary"
          ? "bg-secondary hover:opacity-80 text-gray-900"
          : ""
      }
      ${
        btnType === "tertiary"
          ? "bg-tertiary hover:opacity-80 text-gray-900"
          : ""
      }
      
      
      `}
      {...props}
    >
      {btnLabel}
    </button>
  );
}
