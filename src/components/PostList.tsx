import MarkdownToJsx from 'markdown-to-jsx';
import postlist from "../posts.json"
import Labels from "./Labels";
import Blank from "./Blank"; // Replaces VideoPlayer to diable embeded videos

interface Props {
  label?: string;
  quantity?: number | null;
}


// Adapted from
// https://github.com/willjw3/react-markdown-blog/blob/master/src/components/postlist.js
const PostList = ({ label = "", quantity }: Props) => {

  const search = () => {
    return postlist.filter(
      (post) =>
        post.categories.includes(label.toLowerCase())
    )
  }

  const results = label ? search() : postlist;
  const qty = quantity ? quantity : results.length;

  return (
    <div className="postlist">

      {/* {label ? (
        <p>Voici les résultats correspondant à la recherche  </p>
      ) : (<></>)} */}
      {results.length ? (
        results.slice(0, qty).map((post) => {
          return (
            <div key={post.id} className="postlist__card">

              <a href={`/blog/${post.id}`}>
                <img src={`/${post.photo ? post.photo : 'statique.webp'}`} className='blogphoto' />
              </a>

              <h3>
                <a href={`/blog/${post.id}`}>{post.title}</a>
              </h3>
              <small>
                Publié le {post.postDate} par {post.author}
              </small>
              <Labels>{post.categories}</Labels>

              <hr />

              {/* S'il n'y a pas de résumé, fallback sur le début de l'article
                -- attention aux exemples de code!! */}
              {post.abstract ?
                <p>{post.abstract}</p>
                :
                <MarkdownToJsx
                  children={post.content.split(" ").slice(0, 20).join(" ") + "..."}
                  options={{ overrides: { VideoPlayer: Blank, }, }} />
              }

              <small>
                <a href={`/blog/${post.id}`}>Lire la suite ...</a>
              </small>

            </div>
          )
        })
      ) : (
        <div className='container'>
          <hr />
          <p>Désolé mais aucun article ne correspond à la recherche.</p>
        </div>
      )}

    </div>
  )
}

export default PostList