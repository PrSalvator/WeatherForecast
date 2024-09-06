import { useEffect, useState } from "react";

export const useImage = (imageName: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../../assets/weather/${imageName}.svg`);
        setImage(response.default);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [imageName]);

  return {
    loading,
    error,
    image,
  };
};
