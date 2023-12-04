'use client';

import { useEffect, useState } from 'react';

import { DarkIcon, LightIcon } from '@/assets/icons';
import { useMode } from '@/hooks';
import Button from './common/Button';

export default function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { isLightMode, toggleMode } = useMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button onClick={toggleMode} className="w-5 h-5">
      {mounted ? (
        isLightMode ? (
          <LightIcon width={'20px'} height={'20px'} className="fill-navy-600 hover:fill-navy-300" />
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
