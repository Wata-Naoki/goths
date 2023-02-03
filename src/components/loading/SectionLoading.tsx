import React from "react";

export type LoadingProps = {
  variant?: "primary" | "secondary" | "danger";
};
export const SectionLoading = ({ variant = "primary" }: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 ">
      <div className="flex justify-center">
        <div
          className={`w-5 h-5 border-4  rounded-full animate-spin border-t-transparent ${
            variant === "secondary" ? "border-white" : "border-green-800"
          }`}
        ></div>
      </div>
    </div>
  );
};
