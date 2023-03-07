import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "sub" | "text";
} & React.ComponentPropsWithoutRef<"button">;

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      type="button"
      className={clsx(
        "inline-flex min-w-max max-w-max items-center justify-center gap-2 rounded border transition ",
        props.disabled && "opacity-40",
        variant === "primary" &&
          "bg-green-700 hover:bg-green-800 text-white border-green-800",
        variant === "sub" &&
          "text-green-700 border-green-800 hover:bg-green-50 bg-white",
        variant === "text" &&
          "text-green-700 hover:bg-green-50 border-none bg-none",
        variant === "text" ? "py-2 px-2" : "py-1.5 px-2.5",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
