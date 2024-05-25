import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RedirectHandler = () => {
  const { id } = useParams<{ id: string }>();

  const [url, setUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await axios.get(`http://192.168.1.13:8080/get/${id}`);
        setUrl(response.data?.url);
      } catch (e) {
        setError("Error fetching URL");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUrl();
  }, [id]);

  useEffect(() => {
    if (url) {
      window.location.href = url;
    }
  }, [url]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return <div>Redirecting...</div>;
};

export default RedirectHandler;
