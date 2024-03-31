import React, { useEffect, useState, useCallback } from "react";

export const useClickOutSide = (ref: React.RefObject<any>) => {
  const [showModal, setShowModal] = useState(false);
  const [shouldCloseModal, setShouldCloseModal] = useState(false);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShouldCloseModal(true);
    }
  }, [ref]);

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setShouldCloseModal(true);
    }
  };

  useEffect(() => {
    if (shouldCloseModal) {
      setShowModal((prevShowModal: boolean) => {
        if ( prevShowModal ) {
          return false;
        } else {
          return prevShowModal
        }
      });
      setShouldCloseModal(false); // Reset the state
    }
  }, [shouldCloseModal]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [handleClickOutside]);

  return {
    showModal,
    setShowModal,
  };
};