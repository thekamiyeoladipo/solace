// src/components/SectionTitle.jsx
import React from "react";

const SectionTitle = ({ eyebrow, heading, paragraph }) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      {/* Eyebrow */}
      {eyebrow && (
        <p className="text-lightorange font-semibold tracking-wide mb-4">
          {eyebrow}
        </p>
      )}

      {/* Heading */}
      {heading && (
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
          {heading}
        </h2>
      )}

      {/* Paragraph */}
      {paragraph && (
        <p className="text-lg text-dark/70">{paragraph}</p>
      )}
    </div>
  );
};

export default SectionTitle;
