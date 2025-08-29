// src/components/SectionTitle.jsx
import React from "react";

const SectionTitle = ({ eyebrow, heading, paragraph, eyebrowColor="text-lightorange", titleColor="text-dark", paraColor="text-dark/70" }) => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {/* Eyebrow */}
      {eyebrow && (
        <p className={`font-semibold tracking-wide mb-4 ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}

      {/* Heading */}
      {heading && (
        <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${titleColor}`}>
          {heading}
        </h2>
      )}

      {/* Paragraph */}
      {paragraph && (
        <p className={`text-sm md:text-base leading-relaxed ${paraColor}`}>
          {paragraph}
          </p>
      )}
    </div>
  );
};

export default SectionTitle;
