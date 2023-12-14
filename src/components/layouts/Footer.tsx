import { GithubIcon, VelogIcon } from '@/assets/icons';
import { LinkItem } from '@/components/common';
import { cn } from '@/utils/cn';

export default function Footer({ className, ...props }: React.ComponentProps<'footer'>) {
  return (
    <footer
      className={cn(
        'flex flex-col items-center border-t-[0.1px] text-sm w-full text-tertiary border-black-600 mt-24 pb-24 pt-4',
        className,
      )}
      {...props}
    >
      {`ⓒ 2023-2024 Sungjihyun`}
      <div className="mt-2 flex gap-4">
        <LinkItem href="https://github.com/jhsung23" target="_blank">
          <GithubIcon width={'20px'} height={'20px'} />
        </LinkItem>
        <LinkItem href="https://velog.io/@jhsung23" target="_blank">
          <VelogIcon width={'20px'} height={'20px'} />
        </LinkItem>
      </div>
    </footer>
  );
}
