'use client';

import { useEffect, useState } from 'react';

import { DarkIcon, LightIcon } from '@/assets/icons';
import { Button } from '@/components/common';

import useMode from './useMode';

export default function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { isLightMode, toggleMode } = useMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      onClick={toggleMode}
      className="h-5 w-5"
      aria-label={isLightMode ? '다크모드로 변경' : '라이트모드로 변경'}
    >
      {mounted ? (
        isLightMode ? (
          <LightIcon
            width={'20px'}
            height={'20px'}
            className="fill-[navy-600] hover:fill-[navy-300]"
          />
        ) : (
          <DarkIcon
            width={'20px'}
            height={'20px'}
            className="fill-black-200 hover:fill-black-400"
          />
        )
      ) : (
        <></>
      )}
    </Button>
  );
}
