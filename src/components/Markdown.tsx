import MarkdownToJsx from "markdown-to-jsx";

import RichArticlePreBloc from "./RichArticlePreBlock"
import VideoPlayer from "./VideoPlayer";
import Glitch from "../components/glitch"

interface Props {
  children: string;
}

const Markdown = ({children}: Props) => {
  return (
    <>
      <MarkdownToJsx
        children={children}
        options={{
          namedCodesToUnicode: {
            laquo: '\u00AB',  //  «
            raquo: '\u00BB',  //  »
            nbsp: '\u00A0',   //  non-breaking-space
            ndash: '\u2013',
            mdash: '\u2014',
          },
          overrides: {
            pre: RichArticlePreBloc,
            VideoPlayer: VideoPlayer,
            Glitch: Glitch,
            // code: Code,
            // Code: Code,
          },
        }}
      />
    </>
  );
};

export default Markdown;
