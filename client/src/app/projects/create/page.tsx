"use client";
import ProjectForm from '@/components/ProjectForm';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Wraper from '@/components/Wraper';

const HomePage = () => {
    const router = useRouter();
    useEffect(() => {
      if (localStorage.getItem("role")!="Client") {
        router.push('/projects')
      }

    }, [])
    
  return (
    <Wraper>
        <div className="w-full flex items-center justify-center">
      <ProjectForm />
    </div></ Wraper>
    
  );
};

export default HomePage;
