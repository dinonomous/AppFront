import React from 'react';

const ProjectCards = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projects.map((project) => (
        <div
          key={project.projectId}
          className="bg-neutral-700 shadow-lg rounded-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-2">{project.projectName}</h2>
          <p className="text-white mb-4">{project.description}</p>
          <div className="flex justify-between">
            <span className="text-lg font-bold">${project.budget.toFixed(2)}</span>
            <span className={`text-sm ${project.status === 'Completed' ? 'text-green-500' : project.status === 'In Progress' ? 'text-yellow-500' : 'text-red-500'}`}>
              {project.status}
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-neutral-300">
              Start Date: {new Date(project.startDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-neutral-300">
              End Date: {new Date(project.endDate).toLocaleDateString()}
            </p>
          </div>
          <div className='mt-4'>
          {project.status === 'Open' ? <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Apply</button>
: <button type="button" class="opacity-50 cursor-not-allowed py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Apply</button>
}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
