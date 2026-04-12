// import { Link } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

import AboutCard from '../components/AboutCard';
import PageTitle from '../components/PageTitle';
import PostList from '../components/PostList';

// p.s. add filter for categories / search / etc here...

function BlogPage() {
  const [searchParams] = useSearchParams();

  const labelParam = searchParams.get('label');
  const qtyParam = searchParams.get('qty');

  const label = labelParam || '';
  const quantity = qtyParam ? Number(qtyParam) : 0;

  return (
    <>
      <PageTitle>Blogue</PageTitle>

      <div className="container">
        <h1>Blogue.</h1>
        <div className="subheading">
          Un appercu de mes projets personnels actuels et des trucs qui me passent par la tête.
        </div>
      </div>

      <div className="postlist--wrapper">
        <PostList label={label} quantity={quantity} />

      </div>

      <div className="container">
        <AboutCard />
      </div>
    </>
  );
}

export default BlogPage;
