import React, { useState } from "react";

export const FormComponent = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const pattern =
    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

  const handleBlur = (e: any) => {
    const email = e.target.value;
    if (pattern.test(email)) {
      setEmailError("");
    } else {
      setEmailError("メールアドレスは必須です");
    }
  };

  return (
    <>
      <div className="mt-10 ml-5">
        <div>
          <div className="text-sm text-gray-500">メールアドレス</div>

          <div className="my-1">
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              onBlur={handleBlur}
              className="text-left border border-slate-400 rounded focus:outline-0 pl-1  py-1 w-80 "
            ></input>
          </div>
          <div>
            {emailError && <p className="text-sm text-red-400">{emailError}</p>}
          </div>
        </div>
      </div>
    </>
  );
};
