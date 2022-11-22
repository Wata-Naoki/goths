import React from "react";

export const useModalState = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return { isOpen, setIsOpen, closeModal, openModal };
};
