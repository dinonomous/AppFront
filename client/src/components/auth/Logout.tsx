import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LogoutButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const logout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      if(localStorage.getItem('token')){
        localStorage.removeItem('token')
        router.push("/");
      window.location.reload();
      }
      else{
        router.push("/");
      window.location.reload();
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      className="text-lg h-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full px-8 py-2.5 me-2 mb-2 dark:bg-[#235789] dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      onClick={logout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
