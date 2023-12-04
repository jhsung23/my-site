import { GithubIcon, VelogIcon } from '@/assets/icons';
import { cn } from '@/utils/cn';
import { LinkItem } from '../common';

export default function Footer({ className, ...props }: React.ComponentProps<'footer'>) {
  return (
    <footer
      className={cn(
        'flex flex-col items-center border-t-[0.1px] text-sm w-11/12 text-tertiary border-navy-400 dark:border-black-500 max-w-5xl mt-24 pb-24 pt-4',
        className,
      )}
      {...props}
    >
      {`ⓒ JihyunSite. All rights reserved.`}
      <div className="flex gap-4 mt-2">
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
