// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Syntax Highlight Languates import:
// ----------------------------------
// import c from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
// import csharp from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
// import fsharp from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
// import git from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
// import haskell from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
// import java from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
// import json from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
// import latex from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
// import prolog from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
// import regex from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
// import rust from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
// import shellSession from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
// import sql from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
// import yaml from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";

// Other imports:
// ----------------------------------
import Delayed from "./Delayed";

// Syntax Highlight Languates register:
// ------------------------------------
// SyntaxHighlighter.registerLanguage("c", c);
// SyntaxHighlighter.registerLanguage("csharp", csharp);
SyntaxHighlighter.registerLanguage("css", css);
// SyntaxHighlighter.registerLanguage("fsharp", fsharp);
// SyntaxHighlighter.registerLanguage("git", git);
// SyntaxHighlighter.registerLanguage("haskell", haskell);
// SyntaxHighlighter.registerLanguage("http", http);
// SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("javascript", javascript);
// SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("jsx", jsx);
// SyntaxHighlighter.registerLanguage("latex", latex);
SyntaxHighlighter.registerLanguage("markdown", markdown);
// SyntaxHighlighter.registerLanguage("prolog", prolog);
SyntaxHighlighter.registerLanguage("python", python);
// SyntaxHighlighter.registerLanguage("regex", regex);
// SyntaxHighlighter.registerLanguage("rust", rust);
SyntaxHighlighter.registerLanguage("scss", scss);
// SyntaxHighlighter.registerLanguage("shellsession", shellSession);
// SyntaxHighlighter.registerLanguage("sql", sql);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
// SyntaxHighlighter.registerLanguage("yaml", yaml);

interface Props {
  children: string;
  className: string;
};

const RichArticleCodeBlock = ({ children, className = 'code' }: Props) => {
  const language = className?.replace("lang-", "");

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
};

export default RichArticleCodeBlock




