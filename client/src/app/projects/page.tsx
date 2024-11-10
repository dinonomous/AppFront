"use client";

import React, { useEffect, useState } from 'react';
import ProjectCards from '@/components/ProjectCards';
import Wraper from '@/components/Wraper';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');



  useEffect(() => {
    // Simulate loading
    const loadData = async () => {
      try {
        const response = await fetch('http://localhost:8080/project', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const result = await response.json();
        console.log(result);
        setProjects(result); // Assuming `result` contains project data
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false); // Ensure loading is set to false after fetch attempt
      }
    };
  
    loadData();
  }, []); // Empty dependency array ensures this runs once on mount
  

  if (loading) {
    return <div className="text-center">Loading projects...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Wraper>
      <h1 className="text-3xl font-bold text-center mt-8 mb-4">Projects</h1>
      <ProjectCards projects={projects} />
      </Wraper>
    </div>
  );
};

export default Home;
