import MarkdownToJsx from "markdown-to-jsx";

import RichArticlePreBloc from "./RichArticlePreBlock"
import VideoPlayer from "./VideoPlayer";

interface Props {
  children: string;
}

const Markdown = ({children}: Props) => {
  return (
    <>
      <MarkdownToJsx
        children={children}
        options={{
          overrides: {
            pre: RichArticlePreBloc,
            VideoPlayer: VideoPlayer,
            // code: Code,
            // Code: Code,
          },
        }}
      />
    </>
  );
};

export default Markdown;
