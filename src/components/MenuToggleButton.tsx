'use client';

import { CloseIcon, MenuIcon } from '@/assets/icons';
import { Button } from '@/components/common';
import { setIsOpen } from '@/lib/features/menu/menuSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { cn } from '@/utils/cn';

interface Props {
  className?: string;
}

export default function MenuToggleButton({ className }: Props) {
  const isMenuOpen = useAppSelector((state) => state.isOpen);
  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    if (isMenuOpen) dispatch(setIsOpen(false));
    else dispatch(setIsOpen(true));
  };

  return (
    <Button className={cn('w-6 h-6 ', className)} onClick={toggleMenu}>
      {isMenuOpen ? (
        <CloseIcon width={'24px'} height={'24px'} />
      ) : (
        <MenuIcon width={'24px'} height={'24px'} />
      )}
    </Button>
  );
}
