// import { Link } from "react-router-dom";
// import { redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import './BlogTemplatePage.css'
import Labels from '../components/Labels';
import Markdown from '../components/Markdown';
import PageTitle from '../components/PageTitle';

import postList from '../posts.json';


const BlogTemplatePage = () => {
    const params = useParams();
    const validId = parseInt(params.id!);

    let postFound = false;
    let fetchedPost = {
        title: "",
        author: "",
        date: "",
        labels: [""],
        content: "",
    }

    if (!validId) {
        return <Navigate replace to="/404" />;
    }

    for (const post of postList) {
        if (validId === post.id) {
            fetchedPost.title = (post.title ? post.title : "No title given");
            fetchedPost.author = (post.author ? post.author : "No title given");
            fetchedPost.date = (post.date ? post.date : "No title given");
            fetchedPost.labels = (post.labels ? post.labels : ["No title given"]);
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
            
            <div className='smallprint'>{fetchedPost.date}</div>
            <h1>{fetchedPost.title}</h1>
            <Labels>{fetchedPost.labels}</Labels>
            <Markdown>{fetchedPost.content}</Markdown>
        </>
    );
};

export default BlogTemplatePage;
