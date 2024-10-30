import AboutCard from '../components/AboutCard';
import PageTitle from '../components/PageTitle';

import BlogHeader from '../components/BlogHeader';
import Glitch from '../components/glitch';
import PostList from '../components/PostList';
import MedDot from '../components/MedDot';



const Photo = () => {
  return (
    <>
      <PageTitle>Photographie</PageTitle>

      <article>
        <BlogHeader photo={'../mirroir.webp'}>
          <div>
            <Glitch>
              <h1>Photographie.</h1>
              <div className='subheading'>Capturer l'instant.</div>
            </Glitch>
          </div>
        </BlogHeader>

        <div className='container'>

          <p>
            adfasdf
          </p>

          <p>
            En voici quelques points saillants :
          </p>

          <img src="/blogs/cv_booklet/Cover_Mockup.webp" alt="Mon CV sous forme de livret" className="blogphoto" />
          <img src="/blogs/cv_booklet/Cover_Mockup.webp" alt="Mon CV sous forme de livret" className="blogphoto" />
          <img src="/blogs/cv_booklet/Cover_Mockup.webp" alt="Mon CV sous forme de livret" className="blogphoto" />

        </div>
      </article>

      <MedDot />

      <div className='container'>





        <br />
        <h2>Dernièrement, sur le blogue :</h2>

        <div className="postlist--bestof">
          <PostList label='montage' quantity={3} />
        </div>

        <AboutCard />
      </div>
    </>
  );
};

export default Photo;
