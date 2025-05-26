import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollTo = useCallback((elementId: string) => {
    const element = document.querySelector(`#${elementId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, elementId: string) => {
    e.preventDefault();
    scrollTo(elementId);
  }, [scrollTo]);

  return {
    scrollTo,
    handleClick
  };
}; 