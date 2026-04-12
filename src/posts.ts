import slugify from 'slugify';
import { parse as parseYaml } from 'yaml';

/** Published posts from `blog_content/*.md` (YAML front matter + body). */
export interface BlogPost {
  id: string
  title: string
  author: string
  photo: string
  abstract: string
  postDate: string
  categories: string[]
  content: string
}

interface MatterData {
  title?: string
  author?: string
  photo?: string
  abstract?: string
  categories?: string | string[]
  postDate?: string
  postStatus?: string
}

/** Opening `---`, YAML block, closing `---`, then body (CommonMark + HTML). */
const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;

const rawModules = import.meta.glob<string>('./blog_content/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

function splitFrontMatter(raw: string): { data: MatterData, content: string } {
  const m = FRONT_MATTER.exec(raw.trimStart());
  if (!m) {
    return { data: {}, content: raw };
  }
  try {
    const parsed = parseYaml(m[1]);
    const data = parsed !== null && typeof parsed === 'object'
      ? (parsed as MatterData)
      : {};
    return { data, content: m[2] };
  }
  catch {
    return { data: {}, content: raw };
  }
}

function normalizeCategories(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((c) => String(c).trim().toLowerCase()).filter(Boolean);
  }
  if (typeof value === 'string') {
    return value
      .trim()
      .toLowerCase()
      .split(', ')
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return ['no label given'];
}

function isDraft(status: unknown): boolean {
  return String(status ?? '').trim().toLowerCase() === 'draft';
}

function buildPostList(): BlogPost[] {
  const out: BlogPost[] = [];

  for (const raw of Object.values(rawModules)) {
    const { data: m, content } = splitFrontMatter(raw);

    if (!m.title?.trim()) {
      continue;
    }
    if (isDraft(m.postStatus)) {
      continue;
    }

    const categories = normalizeCategories(m.categories);

    out.push({
      id: slugify(m.title, { lower: true }),
      title: m.title,
      author: m.author ?? 'No author given',
      photo: m.photo ?? '',
      abstract: m.abstract ?? '',
      postDate: m.postDate ?? 'No date given',
      categories: categories.length ? categories : ['no label given'],
      content: content.trim() ? content : 'No content given',
    });
  }

  out.sort((a, b) => (a.postDate < b.postDate ? 1 : -1));
  return out;
}

export const postList: BlogPost[] = buildPostList();
