import React from "react";

function LegalDocument() {
  return <div>LegalDocument</div>;
}

export default LegalDocument;

export const Description = ({ description }) => {
  return <p className="text-xl">{description}</p>;
};

export const Header = ({ header, size, className }) => {
  return <h1 className={className}>{header}</h1>;
};

export const DashedCategoryLabel = ({ points, size, className }) => {
  return (
    <>
      {points.map((point) => {
        return (
          <div className={className}>
            <p className="text-xl">
              <span className={`font-bold text-xl`}>{point.title}</span> -{" "}
              {point.description}
            </p>
          </div>
        );
      })}
    </>
  );
};
