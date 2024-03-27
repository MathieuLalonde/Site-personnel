import { Link } from "react-router-dom"
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
        post.labels.includes(label.toLowerCase())
    )
  }

  const results = label ? search() : postlist;

  return (
    <div className="postlist">
      {/* <h1 className="title">All Posts</h1> */}

      {results.length ? (
        results.map((post, i) => {

          return (
            // p.s. using i as the key is considered bad practice.
            <div key={i} className="post-card">

              <h2>
                <Link className="links" to={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <Labels>{post.labels}</Labels>

              <small>
                Publié le {post.date} par {post.author}
              </small>

              <MarkdownToJsx
                children={post.content.split(" ").slice(0, 20).join(" ") + "..."}
                options={{ overrides: { VideoPlayer: Blank, }, }} />

              <small>
                <Link className="links" to={`/blog/${post.id}`}>Read more</Link>
              </small>

              <hr />
            </div>
          )
        })
      ) : (
        <>
            <hr />
            Aucun article correspond à la recherche
        </>
      )}



      {/* {postlist.length &&
        postlist.map((post, i) => {


        if (!label || post.labels.includes(label.toLowerCase())) {
          const cleanContent = post.content.replace('<VideoPlayer', '<span hidden')
          return (
            // p.s. using i as the key is considered bad practice.
            <div key={i} className="post-card">

              <h2>
                <Link className="links" to={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <Labels>{post.labels}</Labels>

              <small>
                Publié le {post.date} par {post.author}
              </small>

              <Markdown>
                {cleanContent.split(" ").slice(0, 20).join(" ") + "..."}
              </Markdown>

              <small>
                  <Link className="links" to={`/blog/${post.id}`}>Read more</Link>
                </small>

              <hr />
            </div>
          )
        }

        })
      
      } */}


    </div>
  )
}

export default PostList