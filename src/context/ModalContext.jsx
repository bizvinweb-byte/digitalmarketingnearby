"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import ConsultationForm from "@/components/common/ConsultationForm";
import { X } from "lucide-react";

const ModalContext = createContext({
  isOpen: false,
  modalData: { service: "", source: "" },
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({ service: "", source: "" });

  const openModal = (data = {}) => {
    setModalData({
      service: data.service || "",
      source: data.source || "Global Popup Consultation",
    });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Close on Escape key & lock body scroll while modal is active
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ isOpen, modalData, openModal, closeModal }}>
      {children}

      {/* Global Consultation Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-slate-950/65 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Modal Card Container */}
          <div className="relative z-10 w-full max-w-lg my-auto transition-transform duration-300">
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close consultation modal"
              className="absolute -top-3 -right-2 sm:-top-3.5 sm:-right-3.5 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900 text-white hover:bg-[#fc7511] flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-110 active:scale-95 cursor-pointer border-2 border-white"
            >
              <X className="size-4 stroke-[2.5]" />
            </button>

            {/* Reusable Form */}
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <ConsultationForm
                key={`${modalData.source}-${modalData.service}`}
                source={modalData.source}
                initialService={modalData.service}
                onClose={closeModal}
              />
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

export const useConsultationModal = () => useContext(ModalContext);

