import React from "react";

/**
 * Reusable Global Container component to ensure 100% consistent
 * max-width and left-to-right padding across the entire website.
 */
export default function Container({ children, className = "" }) {
  return (
    <div className={`site-container ${className}`}>
      {children}
    </div>
  );
}

