import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: (toggle: boolean) => void;
  title?: string;
  className?: string;
  contentClassName?: string;
};

export const Modal = ({
  children,
  isOpen,
  setIsOpen,
  title,
  className = "",
  contentClassName = "",
}: React.PropsWithChildren<Props>) => {
  const closeModal = () => setIsOpen(false);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className={`fixed inset-0 z-10 overflow-auto overflow-y-auto`}
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-secondary bg-opacity-60" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={`my-8 inline-block w-full max-w-max transform overflow-auto rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all ${contentClassName}`}
              style={{
                maxHeight: "90vh",
              }}
            >
              {title && (
                <Dialog.Title
                  as="h3"
                  className="w-full text-lg font-medium leading-6"
                >
                  {title}
                </Dialog.Title>
              )}
              <div className="mt-4">{children}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
