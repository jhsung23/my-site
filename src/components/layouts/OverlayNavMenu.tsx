'use client';

import { useEffect } from 'react';

import { NavMenu } from '@/components/layouts';
import { setIsOpen } from '@/lib/features/menu/menuSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

export default function OverlayNavMenu() {
  const isMenuOpen = useAppSelector((state) => state.isOpen);
  const dispatch = useAppDispatch();

  const closeMenu = () => {
    dispatch(setIsOpen(false));
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen && (
        <NavMenu
          className="fixed bottom-0 left-auto right-auto w-11/12 h-full bg-opacity-95 dark:bg-opacity-95 top-28 bg-primary"
          onClickNavLink={closeMenu}
        />
      )}
    </>
  );
}
