// import { Link } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

import PageTitle from '../components/PageTitle';
import PostList from "../components/PostList";
import AboutCard from '../components/AboutCard';


// p.s. add filter for categories / search / etc here...

const BlogPage = () => {
  const [searchParams] = useSearchParams();

  const labelParam = searchParams.get('label');
  const qtyParam = searchParams.get('qty');

  const label = labelParam ? labelParam : ""
  const quantity = qtyParam ? Number(qtyParam) : 0;

  return (
    <>
      <PageTitle>Blogue</PageTitle>
      
      <div className='container'>
        <h1>Blogue.</h1>
        <div className='subheading'>
          Un appercu de mes projets personnels actuels et des trucs qui me passent par la tête.
        </div>
      </div>

      <div className='postlist--wrapper'>
        <PostList label={label} quantity={quantity} />
        
      </div>

      <div className='container'>
        <AboutCard />
      </div>
    </>
  );
};

export default BlogPage;
