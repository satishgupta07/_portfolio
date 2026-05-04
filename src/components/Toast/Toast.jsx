import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaTimes } from "react-icons/fa";
import "./Toast.css";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

let id = 0;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "success") => {
    const newId = ++id;
    setToasts((prev) => [...prev, { id: newId, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newId));
    }, 4000);
  }, []);

  const remove = (toastId) =>
    setToasts((prev) => prev.filter((t) => t.id !== toastId));

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="toast__container" aria-live="polite">
        <AnimatePresence>
          {toasts.map(({ id: tid, message, type }) => (
            <motion.div
              key={tid}
              className={`toast toast--${type}`}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="toast__icon">
                {type === "success" ? <FaCheckCircle /> : <FaTimesCircle />}
              </span>
              <p className="toast__message">{message}</p>
              <button className="toast__close" onClick={() => remove(tid)} aria-label="Close">
                <FaTimes />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
