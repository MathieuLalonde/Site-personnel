// Adapted from:
// https://rowinvanamsterdam.com/blog/add-syntax-highlighting-in-react-using-markdown-to-jsx-and-react-syntax-highlighter

import { ReactElement } from "react";
import RichArticleCodeBlock from "./RichArticleCodeBlock";

interface Props {
  children: ReactElement<any>; // allow any props
  [key: string]: any; // so we can spread ...rest
}

const RichArticlePreBlock = ({ children, ...rest }: Props) => {
  if (children.type === "code") {
    return (
      <RichArticleCodeBlock
        children={children.props.children}
        className={children.props.className}
      />
    );
  }

  return <pre {...rest}>{children}</pre>;
};

export default RichArticlePreBlock;