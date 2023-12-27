'use client';

import { useEffect } from 'react';

import { NavMenu } from '@/components';
import { setIsOpen } from '@/store/features/menu/menuSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

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
          // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
          className="bg-primary fixed inset-x-auto bottom-0 top-28 h-full w-11/12 bg-opacity-95 dark:bg-opacity-95"
          onClickNavLink={closeMenu}
        />
      )}
    </>
  );
}
