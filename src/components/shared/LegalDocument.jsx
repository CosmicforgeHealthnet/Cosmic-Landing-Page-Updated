import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

function LegalDocument() {
  return <div>LegalDocument</div>;
}

export default LegalDocument;

export const Description = ({
  description,
  className,
  isLink,
  link,
  linkType,
}) => {
  // check the link type
  function getLinkType() {
    let LINK;
    if (linkType == "email") {
      LINK = `mailto:${link}`;
    } else if (linkType == "web") {
      LINK = link;
    }
    return LINK;
  }
  return isLink && isLink ? (
    // check if there are links in the description and add an a tag with styling to it
    <p>
      {description.split(link).map((part, index, arr) => (
        <span key={index}>
          {part}
          {index < arr.length - 1 && (
            <a href={getLinkType()} className="text-blue-600 underline">
              {link}
            </a>
          )}
        </span>
      ))}
    </p>
  ) : (
    <p className={`text-lg text-left ${className}`}>{description}</p>
  );
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

// Improved BulletCategoryLabel component
export const BulletCategoryLabel = ({ points, size, className = "" }) => {
  return (
    <ul className={`list-disc ml-6 space-y-3 ${className}`}>
      {points.map((point, index) => (
        <li key={point.id || index} className="text-lg leading-relaxed pl-2">
          <span className="font-bold text-xl">
            {point.title && `${point.title}: `}
          </span>
          {point.description}
        </li>
      ))}
    </ul>
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

// New Accordion Section Component
export const AccordionSection = ({
  title,
  children,
  isOpen,
  onToggle,
  className = "",
}) => {
  return (
    <div className={`border border-gray-50 rounded-lg mb-4 ${className}`}>
      <button
        onClick={onToggle}
        className="w-full px-8 py-6 text-left  hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-inset"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 px-6 py-4 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};
