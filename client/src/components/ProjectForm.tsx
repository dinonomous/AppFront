"use client";
import React, { useState } from 'react';

interface ProjectFormData {
  projectName: string;
  description: string;
  budget: number;
  startDate: string;
  endDate: string;
  status: string;
}

const ProjectForm = () => {
  // Initial state for form data
  const [formData, setFormData] = useState<ProjectFormData>({
    projectName: '',
    description: '',
    budget: 0,
    startDate: '',
    endDate: '',
    status: 'ACTIVE', // default value
  });

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData), // Convert form data to JSON
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Project Created:', result);
        alert('Project created successfully!');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert('Error creating project!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form!');
    }
  };

  return (
    <div className="w-1/2 mx-auto p-6 bg-neutral-800 shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-6">Create a New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Project Name */}
        <div>
          <label htmlFor="projectName" className="block text-sm font-medium text-neutral-300">
            Project Name
          </label>
          <input
            type="text"
            name="projectName"
            id="projectName"
            value={formData.projectName}
            onChange={handleInputChange}
            className="mt-1 bg-neutral-600 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-neutral-300">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows={4}
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 block w-full bg-neutral-600 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          ></textarea>
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-neutral-300">
            Budget
          </label>
          <input
            type="number"
            name="budget"
            id="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="mt-1 block bg-neutral-600 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Start Date */}
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-neutral-300">
            Start Date
          </label>
          <input
            type="datetime-local"
            name="startDate"
            id="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            className="mt-1 block bg-neutral-600 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* End Date */}
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-neutral-300">
            End Date
          </label>
          <input
            type="datetime-local"
            name="endDate"
            id="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            className="mt-1 block w-full bg-neutral-600 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Status */}
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-neutral-300">
            Status
          </label>
          <select
            name="status"
            id="status"
            value={formData.status}
            onChange={handleInputChange}
            className="mt-1 block bg-neutral-600 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
