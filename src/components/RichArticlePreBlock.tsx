// Adapted from:
// https://rowinvanamsterdam.com/blog/add-syntax-highlighting-in-react-using-markdown-to-jsx-and-react-syntax-highlighter

import RichArticleCodeBlock from "./RichArticleCodeBlock";

interface Props {
  children: JSX.Element | JSX.Element[];
};

const RichArticlePreBlock = ({ children, ...rest }: Props) => {
  if ("type" in children && children["type"] === "code") {
    return RichArticleCodeBlock({
      children: children["props"]["children"],
      className: children["props"]["className"]
    });
  }
  return <pre {...rest}>{children}</pre>;
};

export default RichArticlePreBlock