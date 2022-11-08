import React, { useState } from "react";
//npm i react-toastify
import { Id, toast } from "react-toastify";

export const useToast = () => {
  const [id, setId] = useState<Id | undefined>();

  const toastLoading = (message?: string) => {
    const id = toast.loading(message || "処理中です……");
    setId(id);
    return id;
  };

  const toastSucceeded = (message?: string, specifiedId?: Id) => {
    const targetId = specifiedId || id;
    if (!targetId) {
      console.warn("Toast is not initiated.");
      return;
    }

    toast.update(targetId, {
      render: message || "成功しました",
      type: "success",
      ...sharedOptions,
    });
  };

  const toastFailed = (message?: string) => {
    if (!id) {
      console.warn("Toast is not initiated.");
      return;
    }

    toast.update(id, {
      render: message || "失敗しました",
      type: "error",
      ...sharedOptions,
    });
  };

  return { toastLoading, toastSucceeded, toastFailed };
};

const sharedOptions = {
  isLoading: false,
  autoClose: 3000,
  closeOnClick: true,
  closeButton: true,
};
