import clsx from "clsx";
import React, { forwardRef, PropsWithoutRef, useState } from "react";
import { FieldError } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

type TextInputProps = {
  fluid?: boolean;
  label?: string;
  loading?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  error?: FieldError;
  optional?: boolean | string; // trueなら「任意」を出力。stringの場合、指定した文字列を出力。
  annotationText?: string;
  secret?: boolean;
} & PropsWithoutRef<JSX.IntrinsicElements["input"]>;

export const TextInput: React.FC<TextInputProps> = forwardRef<
  HTMLInputElement,
  TextInputProps
>(
  (
    {
      type = "text",
      name,
      label = "",
      placeholder = "",
      loading = false,
      fluid = false,
      className = "",
      disabled = false,
      leadingIcon,
      trailingIcon,
      error,
      optional,
      annotationText,
      secret = false,
      ...props
    },
    ref
  ) => {
    const [showSecret, setShowSecret] = useState(false);

    return (
      <div>
        {label && (
          <label
            htmlFor={name}
            className="block mb-1 text-xl font-medium text-gray-700"
          >
            {label}
            {optional && (
              <span className="ml-3 rounded bg-gray-500 px-1 py-0.5 text-xl font-normal text-white">
                {typeof optional === "boolean" ? "任意" : <>{optional}</>}
              </span>
            )}
          </label>
        )}
        <div className="relative">
          {leadingIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {leadingIcon}
            </div>
          )}

          <div className="flex items-center">
            <input
              disabled={loading || disabled}
              ref={ref}
              type={showSecret ? "text" : type}
              id={name}
              name={name}
              className={clsx(
                disabled && "cursor-not-allowed opacity-50",
                fluid && "w-full",
                leadingIcon && "pl-9",
                trailingIcon && "pr-9",
                error
                  ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring focus:ring-red-500"
                  : "focus:ring-primary focus:border-primary border-gray-300",
                "hover:border-theme-400 block w-full rounded border p-3 shadow-sm focus:outline-none focus:ring sm:text-sm md:max-w-md",
                className
              )}
              placeholder={placeholder}
              onWheel={(e) => type === "number" && e.currentTarget.blur()}
              {...props}
            />
            {secret && (
              <p
                className="ml-3 text-xs cursor-pointer select-none text-primary hover:opacity-75"
                onClick={() => setShowSecret(!showSecret)}
              >
                {showSecret ? "非表示" : "表示"}
              </p>
            )}
          </div>

          {annotationText && (
            <p className={`mt-1 text-xs text-gray-500`}>{annotationText}</p>
          )}
          {error ? (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none md:left-96 md:ml-8">
              <ExclamationCircleIcon
                // className="w-5 h-5 text-red-500"
                aria-hidden="true"
              />
            </div>
          ) : (
            trailingIcon && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none md:left-96 md:ml-8">
                {trailingIcon}
              </div>
            )
          )}
        </div>
        {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
      </div>
    );
  }
);
TextInput.displayName = "TextInput";
