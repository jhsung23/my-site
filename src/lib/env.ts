export const env = Object.freeze({
  NOTION_API_URL: `${process.env.NEXT_PUBLIC_API_URL}`,
  NOTION_API_KEY: `${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
  NOTION_TIL_DATABASE_ID: `${process.env.NEXT_PUBLIC_NOTION_TIL_DATABASE_ID}`,
  NOTION_SNIPPET_DATABASE_ID: `${process.env.NEXT_PUBLIC_NOTION_SNIPPET_DATABASE_ID}`,
  NOTION_PROJECT_DATABASE_ID: `${process.env.NEXT_PUBLIC_NOTION_PROJECT_DATABASE_ID}`,
  GA_ID: `${process.env.NEXT_PUBLIC_GA_ID}`,
});
