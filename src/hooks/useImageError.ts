import { useState, useCallback } from 'react';

export const useImageError = () => {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = useCallback((imageUrl: string) => {
    setImageErrors(prev => new Set(prev).add(imageUrl));
  }, []);

  const hasError = useCallback((imageUrl: string | undefined) => {
    return imageUrl ? imageErrors.has(imageUrl) : false;
  }, [imageErrors]);

  const resetError = useCallback((imageUrl: string) => {
    setImageErrors(prev => {
      const newSet = new Set(prev);
      newSet.delete(imageUrl);
      return newSet;
    });
  }, []);

  const resetAllErrors = useCallback(() => {
    setImageErrors(new Set());
  }, []);

  return {
    handleImageError,
    hasError,
    resetError,
    resetAllErrors,
  };
};