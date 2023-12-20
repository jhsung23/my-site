import { GithubIcon, VelogIcon } from '@/assets/icons';
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
        <a
          href="https://github.com/jhsung23"
          target="_blank"
          aria-label="사이트 개발자의 깃허브 방문"
        >
          <GithubIcon width={'20px'} height={'20px'} />
        </a>
        <a
          href="https://velog.io/@jhsung23"
          target="_blank"
          aria-label="사이트 개발자의 벨로그 방문"
        >
          <VelogIcon width={'20px'} height={'20px'} />
        </a>
      </div>
    </footer>
  );
}
