import { getAllSnippets } from '@/apis/snippetService';
import { SnippetListItem } from '@/components';
import { H1, Paragraph } from '@/components/common';
import { MenuPageIcon } from '@/components/layouts';

export default async function SnippetPage() {
  const snippets = await getAllSnippets();

  return (
    <>
      <MenuPageIcon>🧩</MenuPageIcon>
      <H1 className="mb-3">Snippets</H1>
      <Paragraph className="text-secondary">
        자주 사용하지만 잊어 버리기 쉬운 코드 조각을 모아두었어요.
      </Paragraph>

      <ul className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2">
        {snippets.map((snippet) => (
          <SnippetListItem key={snippet.pageId} {...snippet} />
        ))}
      </ul>
    </>
  );
}
