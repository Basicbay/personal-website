import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AlertProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  onClose: () => void;
  timeout?: number;
}

const Alert: React.FC<AlertProps> = ({
  message,
  type = "info",
  onClose,
  timeout = 3000,
}) => {
  const baseStyle = "p-3 rounded-md text-white mb-4";
  const typeStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout, onClose]);

  return (
    <AnimatePresence>
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}>
    <div className={`${baseStyle} ${typeStyles[type]}`}>
      <div className="flex justify-between items-center">
        <p className="text-nowrap">{message}</p>
        <button onClick={onClose} className="ml-4 text-lg font-bold">
          &times;
        </button>
      </div>
    </div>
    </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
