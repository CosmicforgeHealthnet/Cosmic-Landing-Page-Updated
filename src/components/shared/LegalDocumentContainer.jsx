import { Eye, EyeOff } from "lucide-react";
import { AccordionSection, Description, Header } from "./LegalDocument";
import { useState } from "react";

export const LegalDocumentContainer = ({
  title,
  sections,
  showExpandAll = true,
  className = "",
}) => {
  const [openSections, setOpenSections] = useState(new Set());
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleSection = (sectionId) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(sectionId)) {
      newOpenSections.delete(sectionId);
    } else {
      newOpenSections.add(sectionId);
    }
    setOpenSections(newOpenSections);

    // Update allExpanded state
    setAllExpanded(newOpenSections.size === sections.length);
  };

  const toggleAllSections = () => {
    if (allExpanded) {
      setOpenSections(new Set());
      setAllExpanded(false);
    } else {
      setOpenSections(new Set(sections.map((_, index) => index)));
      setAllExpanded(true);
    }
  };

  const renderSectionContent = (section) => {
    return (
      <>
        {section.description && (
          <Description
            description={section.description}
            className="pb-4"
            isLink={section.isLink}
            link={section.link}
            linkType={section.linkType}
          />
        )}

        {section.subDescription?.map((subDes, index) => (
          <Description
            key={index}
            isLink={subDes.isLink}
            link={subDes.link}
            linkType={subDes.linkType}
            description={subDes.description}
            className="pb-2"
          />
        ))}

        {section.isList && section.List}

        {section.customContent && section.customContent}
      </>
    );
  };

  return (
    <div className={`max-w-4xl mx-auto py-10 px-4 xl:px-0 ${className}`}>
      {/* Document Header */}
      <div className="mb-8">
        {/* <Header
          header={title}
          className="text-3xl font-bold text-gray-900 mb-4"
        /> */}

        {/* Expand/Collapse All Button */}
        {showExpandAll && (
          <button
            onClick={toggleAllSections}
            className="inline-flex cursor-pointer items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {allExpanded ? (
              <>
                <EyeOff className="h-4 w-4 mr-2" />
                Collapse All
              </>
            ) : (
              <>
                <Eye className="h-4 w-4 mr-2" />
                Expand All
              </>
            )}
          </button>
        )}
      </div>

      {/* Accordion Sections */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <AccordionSection
            key={section.id || index}
            title={section.header || section.title}
            isOpen={openSections.has(index)}
            onToggle={() => toggleSection(index)}
          >
            {renderSectionContent(section)}
          </AccordionSection>
        ))}
      </div>
    </div>
  );
};
