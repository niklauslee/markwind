import matter from "gray-matter";
import { twMerge } from "tailwind-merge";

const defaultMeta = {
  title: "",
  bodyClass: "p-0 m-0",
  wrapperTag: "main",
  wrapperClass: "prose prose-truegray font-sans",
  css: {},
};

export function frontmatter(data: string): {
  meta: { [key: string]: any };
  content: string;
} {
  const parsed = matter(data);
  const meta = parsed.data as { [key: string]: any };
  const merged = {
    meta: {
      ...defaultMeta,
      ...meta,
      bodyClass: twMerge(defaultMeta.bodyClass, meta.bodyClass),
      wrapperClass: twMerge(defaultMeta.wrapperClass, meta.wrapperClass),
      css: {
        ...defaultMeta.css,
        ...meta.css,
      },
    },
    content: parsed.content,
  };
  return merged;
}
