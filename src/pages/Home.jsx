import React, { useEffect, useState } from 'react';
import ProjectCards from './ProjectCards';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Static project data
  const staticProjects = [
    {
      projectId: 1,
      projectName: "Website Development",
      description: "Develop a responsive website for a local business",
      budget: 1500.00,
      startDate: "2024-09-30T18:30:00.000+00:00",
      endDate: "2024-11-30T18:30:00.000+00:00",
      status: "Open",
      createdAt: "2024-10-03T11:49:51.753+00:00",
      updatedAt: "2024-10-03T11:49:51.753+00:00"
    },
    {
      projectId: 2,
      projectName: "Mobile App Design",
      description: "Design the UI/UX for a fitness mobile app",
      budget: 1200.00,
      startDate: "2024-10-09T18:30:00.000+00:00",
      endDate: "2024-11-14T18:30:00.000+00:00",
      status: "In Progress",
      createdAt: "2024-10-03T11:49:51.753+00:00",
      updatedAt: "2024-10-03T11:49:51.753+00:00"
    },
    {
      projectId: 3,
      projectName: "SEO Optimization",
      description: "Optimize the SEO for an online e-commerce store",
      budget: 800.00,
      startDate: "2024-09-14T18:30:00.000+00:00",
      endDate: "2024-10-31T18:30:00.000+00:00",
      status: "Completed",
      createdAt: "2024-10-03T11:49:51.753+00:00",
      updatedAt: "2024-10-03T11:49:51.753+00:00"
    }
  ];

  useEffect(() => {
    // Simulate loading
    const loadData = () => {
      setProjects(staticProjects);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="text-center">Loading projects...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mt-8 mb-4">Projects</h1>
      <ProjectCards projects={projects} />
    </div>
  );
};

export default Home;
