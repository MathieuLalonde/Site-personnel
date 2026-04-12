// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import tsx from 'refractor/tsx';
import Delayed from './Delayed';

// v16 uses Refractor: register a syntax *function* (with `displayName`), not a CJS module object.
// Import from `refractor/*` so Vite gets a real function. Historically every fence used the TSX grammar
// as a cheap default; mirror that with aliases instead of registering the same import 8 times.
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.alias('tsx', [
  'css',
  'javascript',
  'js',
  'jsx',
  'markdown',
  'md',
  'python',
  'py',
  'scss',
  'sass',
  'typescript',
  'ts',
]);

interface Props {
  children: string
  className: string
}

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
