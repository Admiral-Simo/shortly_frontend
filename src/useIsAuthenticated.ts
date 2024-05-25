import { useState, useEffect } from "react";
import axios from "axios";

function useIsAuthenticated(): boolean {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Fetch the authentication status only once when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.13:8080/check_authentication",
          {
            withCredentials: true, // Include credentials in the request
          },
        );
        setIsAuthenticated(response.status === 200);
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
      }
    };

    fetchData();
  }, []);

  return isAuthenticated;
}

export default useIsAuthenticated;
