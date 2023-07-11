import { useState } from 'react';

interface BurgerState {
  isOpen: boolean;
  handleClick: () => void;
}

export const useBurger = (): BurgerState => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    handleClick,
  };
};
