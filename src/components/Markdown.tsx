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
          namedCodesToUnicode: {
            laquo: '\u00AB', //  «
            raquo: '\u00BB', //  »
            nbsp: '\u00A0', //  non-breaking-space
            ndash: '\u2013',
            mdash: '\u2014',
          },
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
