import { ReactNode, useEffect } from "react";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
  title?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Modal = ({
  title,
  isOpen,
  onClose,
  children,
  size = "md",
}: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "w-80",
    md: "w-96",
    lg: "w-[40rem]",
    xl: "w-[50rem]",
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-20 backdrop-blur-xl p-4"
      onClick={onClose}
    >
      <div
        className={`bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-2xl p-6 ${sizeClasses[size]} max-w-full`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b border-gray-300 p-3">
          {title && (
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          )}
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};
