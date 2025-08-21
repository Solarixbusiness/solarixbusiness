import React from 'react';

interface SectionInfo {
  id: string;
  title: string;
  component: React.ComponentType<any>;
  priority?: 'critical' | 'normal';
}

interface NavigationIndexProps {
  sections: SectionInfo[];
}

const NavigationIndex: React.FC<NavigationIndexProps> = ({ sections }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Indice dei Contenuti</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="text-left p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200 text-sm"
          >
            {section.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationIndex;
