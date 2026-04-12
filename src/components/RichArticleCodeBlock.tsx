// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// Prism language packs — historically all pointed at `tsx` (bundle-size tradeoff).
// Single import satisfies import/no-duplicates; swap paths per language when you need real highlighting.
import prismTsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Delayed from './Delayed';

const css = prismTsx;
const javascript = prismTsx;
const jsx = prismTsx;
const markdown = prismTsx;
const python = prismTsx;
const scss = prismTsx;
const tsx = prismTsx;
const typescript = prismTsx;

// Syntax Highlight Languates register:
// ------------------------------------
// SyntaxHighlighter.registerLanguage("c", c);
// SyntaxHighlighter.registerLanguage("csharp", csharp);
SyntaxHighlighter.registerLanguage('css', css);
// SyntaxHighlighter.registerLanguage("fsharp", fsharp);
// SyntaxHighlighter.registerLanguage("git", git);
// SyntaxHighlighter.registerLanguage("haskell", haskell);
// SyntaxHighlighter.registerLanguage("http", http);
// SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage('javascript', javascript);
// SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage('jsx', jsx);
// SyntaxHighlighter.registerLanguage("latex", latex);
SyntaxHighlighter.registerLanguage('markdown', markdown);
// SyntaxHighlighter.registerLanguage("prolog", prolog);
SyntaxHighlighter.registerLanguage('python', python);
// SyntaxHighlighter.registerLanguage("regex", regex);
// SyntaxHighlighter.registerLanguage("rust", rust);
SyntaxHighlighter.registerLanguage('scss', scss);
// SyntaxHighlighter.registerLanguage("shellsession", shellSession);
// SyntaxHighlighter.registerLanguage("sql", sql);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
// SyntaxHighlighter.registerLanguage("yaml", yaml);

interface Props {
  children: string
  className: string
};

function RichArticleCodeBlock({ children, className = 'code' }: Props) {
  const language = className?.replace('lang-', '');

  return (
    <div className={className.toLowerCase()}>

      <Delayed waitBeforeShow={500}>
        <SyntaxHighlighter
          // showLineNumbers
          wrapLongLines
          language={language.toLowerCase()}
          style={coldarkDark}
        >
          {children}
        </SyntaxHighlighter>
      </Delayed>

    </div>
  );
}

export default RichArticleCodeBlock;
