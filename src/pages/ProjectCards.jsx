import React from 'react';

const ProjectCards = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projects.map((project) => (
        <div
          key={project.projectId}
          className="bg-white shadow-lg rounded-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-2">{project.projectName}</h2>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex justify-between">
            <span className="text-lg font-bold">${project.budget.toFixed(2)}</span>
            <span className={`text-sm ${project.status === 'Completed' ? 'text-green-500' : project.status === 'In Progress' ? 'text-yellow-500' : 'text-red-500'}`}>
              {project.status}
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Start Date: {new Date(project.startDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500">
              End Date: {new Date(project.endDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
