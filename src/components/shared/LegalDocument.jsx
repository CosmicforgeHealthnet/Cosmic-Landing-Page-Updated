import React from "react";

function LegalDocument() {
  return <div>LegalDocument</div>;
}

export default LegalDocument;

export const Description = ({ description, className }) => {
  return <p className={`text-lg text-left${className}`}>{description}</p>;
};
export const AllCapsDescription = ({ description, className }) => {
  const CapsText = description;
  const uppercase = CapsText.toLocaleUpperCase();
  return <p className={`text-lg ${className}`}>{uppercase}</p>;
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
            <p className="text-lg ">
              <span className={`font-bold text-xl`}>{point.title}</span> -{" "}
              {point.description}
            </p>
          </div>
        );
      })}
    </>
  );
};

export const BulletCategoryLabel = ({ points, size, className }) => {
  return (
    <>
      {points.map((point) => {
        return (
          <div className={className}>
            <li className="text-lg  list-disc pb-4">
              <span className={`font-bold text-xl`}></span>
              {point.description}
            </li>
          </div>
        );
      })}
    </>
  );
};

export const DecimalCategoryLabel = ({ points, size, className }) => {
  return (
    <>
      <div className={className}>
        {points.map((point) => {
          return (
            <li key={point.id} className="text-lg list-decimal pb-0">
              <span className={`font-bold text-xl`}></span>
              {point.description}
            </li>
          );
        })}
      </div>
    </>
  );
};
export const AlphaCategoryLabel = ({ points, size, className }) => {
  return (
    <div>
      <ol className={`list-[lower-alpha] ml-5 ${className}`}>
        {points.map((point) => {
          return (
            <li key={point.id} className="text-lg pb-0">
              <span className={`font-bold text-xl`}></span>
              {point.description}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export const RomanCategoryLabel = ({ points, size, className }) => {
  return (
    <div>
      <ol className={`list-[lower-roman] ${className}`}>
        {points.map((point) => {
          return (
            <li key={point.id} className="text-lg ml-5 pb-0">
              <span className={`font-bold text-xl`}></span>
              {point.description}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
