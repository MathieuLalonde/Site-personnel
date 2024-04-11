// import { Link } from "react-router-dom";
// import { redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import AboutCard from '../components/AboutCard';
import Labels from '../components/Labels';
import Markdown from '../components/Markdown';
import PageTitle from '../components/PageTitle';

import postList from '../posts.json';
import './BlogTemplatePage.css'


const BlogTemplatePage = () => {
    const params = useParams();
    const validId = parseInt(params.id!);

    let postFound = false;
    let fetchedPost = {
        title: "",
        author: "",
        postDate: "",
        categories: [""],
        content: "",
    }

    if (!validId) {
        return <Navigate replace to="/404" />;
    }

    for (const post of postList) {
        if (validId === post.id) {
            fetchedPost.title = (post.title ? post.title : "No title given");
            fetchedPost.author = (post.author ? post.author : "No title given");
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

            <div className='outer_grid'>
                <div />

                <div className='content_grid'>
                    <div>
                    {/* <Labels>{fetchedPost.categories}</Labels> */}
                    </div>

                    <div className='blog_header'>
                        <Labels>{fetchedPost.categories}</Labels>
                        <div className='smallprint'>{fetchedPost.postDate}</div>
                        <h1>{fetchedPost.title}</h1>
                        
                    </div>


                    <div className='blog_content'>
                        {/* <div className='smallprint'>{fetchedPost.postDate}</div>
                        <h1>{fetchedPost.title}</h1> */}
                        {/* <Labels>{fetchedPost.categories}</Labels> */}
                        <Markdown>{fetchedPost.content}</Markdown>
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
