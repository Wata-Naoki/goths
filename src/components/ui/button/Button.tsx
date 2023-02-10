import React from "react";

type Props = {
  handleOnClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

export const Button = (props: Props) => {
  return (
    <button
      type={props.type || "button"}
      //  props.handleOnClickがあれば実行する
      onClick={props.handleOnClick && props.handleOnClick}
      className="px-4 py-2 text-sm font-medium text-white rounded bg-emerald-700 hover:bg-emerald-800 focus: focus:ring-2 focus:ring-emerald-800 focus:ring-opacity-50"
    >
      {props.children}
    </button>
  );
};
