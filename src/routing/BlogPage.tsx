// import { Link } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

import PageTitle from '../components/PageTitle';
import PostList from "../components/PostList";


// p.s. add filter for categories / search / etc here...

const BlogPage = () => {
    const [searchParams] = useSearchParams();

    const labelParam = searchParams.get('label')
    const label = labelParam ? labelParam : ""

    return (
        <>
            <PageTitle>Blog</PageTitle>

            <h1>Blog</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt, mollitia!                
            </p>
            <br/>
            <PostList label={label}></PostList>
        </>
    );
};

export default BlogPage;
