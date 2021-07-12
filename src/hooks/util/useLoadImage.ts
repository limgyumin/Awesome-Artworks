import { useCallback, useState } from "react";

const useLoadImage = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleLoadImage = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return {
    isLoaded,
    handleLoadImage,
  };
};

export default useLoadImage;
