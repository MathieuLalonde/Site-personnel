// import { Link } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

import PageTitle from '../components/PageTitle';
import PostList from "../components/PostList";
import AboutCard from '../components/AboutCard';


// p.s. add filter for categories / search / etc here...

const BlogPage = () => {
  const [searchParams] = useSearchParams();

  const labelParam = searchParams.get('label')
  const label = labelParam ? labelParam : ""

  return (
    <div className='container'>
      <PageTitle>Blogue</PageTitle>

      <h1>Blogue.</h1>
      <div className='subheading'>
        Un appercu de mes projets personnels actuels et des trucs qui me passent par la tête.
      </div>
      
      <PostList label={label}></PostList>

      <AboutCard />
    </div>
  );
};

export default BlogPage;
