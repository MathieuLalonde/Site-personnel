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

            <h1>Le blog de Mathieu...</h1>
            <p>
                Un appercu de mes projets personnels actuels et des trucs qui me passent par la tête.   
            </p>
            <br />
            <PostList label={label}></PostList>
        </>
    );
};

export default BlogPage;
