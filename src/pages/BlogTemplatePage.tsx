// import { Link } from "react-router-dom";
// import { redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import AboutCard from '../components/AboutCard';
import Labels from '../components/Labels';
import Markdown from '../components/Markdown';
import PageTitle from '../components/PageTitle';

import postList from '../posts.json';
import Glitch from '../components/glitch';
import BlogHeader from '../components/BlogHeader';


const BlogTemplatePage = () => {
  const params = useParams();

  let postFound = false;
  let fetchedPost = {
    title: "",
    author: "",
    photo: "",
    postDate: "",
    categories: [""],
    content: "",
  }

  for (const post of postList) {
    if (params.id === post.id) {
      fetchedPost.title = (post.title ? post.title : "No title given");
      fetchedPost.author = (post.author ? post.author : "No title given");
      fetchedPost.photo = (post.photo ? post.photo : "statique.webp")
      fetchedPost.postDate = (post.postDate ? post.postDate : "No title given");
      fetchedPost.categories = (post.categories ? post.categories : ["No title given"]);
      fetchedPost.content = (post.content ? post.content : "No title given");
      postFound = true;
      break;
    }
  }

  if (!postFound) {
    return <Navigate replace to="/404" />;
  }


  return (
    <>
      <PageTitle>{fetchedPost.title}</PageTitle>

      <BlogHeader photo={fetchedPost.photo}>
        <div className='blog-header__container'>
          <Glitch>
            <div className='blog-header__top-info'>
              <h1 className={fetchedPost.title.includes("ç") || fetchedPost.title.includes("j") || fetchedPost.title.includes("é") ?`titre_avec_cedille`:``}>{fetchedPost.title}</h1>
              <div className='subheading'>Le blogue de Mathieu Lalonde.</div>
            </div>
          </Glitch>
          <div className='blog-header__bottom-info'>
            <div className='small'>{fetchedPost.postDate}</div>
            <Labels>{fetchedPost.categories}</Labels>
          </div>
        </div>
      </BlogHeader>

      <div className='blog--container'>

        <div className='content_grid'>

          <div className='blog__content'>

            <article>
              <Markdown>{fetchedPost.content}</Markdown>
            </article>
          </div>

          <div className='blog_about_card'>
            <AboutCard />
          </div>

        </div>

      </div >
    </>
  );
};

export default BlogTemplatePage;
