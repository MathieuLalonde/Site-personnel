import MarkdownToJsx from 'markdown-to-jsx';
import postlist from "../posts.json"
import Labels from "./Labels";
import Blank from "./Blank"; // Replaces VideoPlayer to diable embeded videos

interface Props {
  label?: string
}


// Adapted from
// https://github.com/willjw3/react-markdown-blog/blob/master/src/components/postlist.js
const PostList = ({ label = "" }: Props) => {

  const search = () => {
    return postlist.filter(
      (post) =>
        post.categories.includes(label.toLowerCase())
    )
  }

  const results = label ? search() : postlist;

  return (
    <div className="postlist">
      {/* <h1 className="title">All Posts</h1> */}

      {results.length ? (
        results.map((post) => {
          return (
            // p.s. using i as the key is considered bad practice.
            <div key={post.id} className="post__card">

              <img src={`/${post.photo?post.photo: 'test.jpg'}`} className='blogphoto' />
              
              <h2>
                <a href={`/blog/${post.id}`}>{post.title}</a>
              </h2>
              <small>
                Publié le {post.postDate} par {post.author}
              </small>
              <Labels>{post.categories}</Labels>

              <hr/>

              <MarkdownToJsx
                children={post.content.split(" ").slice(0, 20).join(" ") + "..."}
                options={{ overrides: { VideoPlayer: Blank, }, }} />

              <small>
                <a href={`/blog/${post.id}`}>Lire la suite ...</a>
              </small>

            </div>
          )
        })
      ) : (
        <>
            <hr />
            Aucun article correspond à la recherche.
        </>
      )}

    </div>
  )
}

export default PostList