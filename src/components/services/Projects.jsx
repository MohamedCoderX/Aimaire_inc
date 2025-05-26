import React from 'react';

const Projects = ({ projects, sectionTitle, sectionDescription }) => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {sectionTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#292a62]">{sectionTitle}</h2>
            {sectionDescription && (
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                {sectionDescription}
              </p>
            )}
          </div>
        )}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
