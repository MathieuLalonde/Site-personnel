import MarkdownToJsx from 'markdown-to-jsx';

import Glitch from '../components/glitch';
import RichArticlePreBloc from './RichArticlePreBlock';
import VideoPlayer from './VideoPlayer';

interface Props {
  children: string
}

function Markdown({ children }: Props) {
  return (
    <>
      <MarkdownToJsx
        children={children}
        options={{
          overrides: {
            pre: RichArticlePreBloc,
            VideoPlayer,
            Glitch,
            // code: Code,
            // Code: Code,
          },
        }}
      />
    </>
  );
}

export default Markdown;
