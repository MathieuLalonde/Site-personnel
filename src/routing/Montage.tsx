import PageTitle from '../components/PageTitle';
import TVLogos from '../components/TVLogos';
import VideoStore from '../components/VideoStore';


const Montage = () => {
  return (
    <div className='container'>
      <PageTitle>Montage</PageTitle>
      
      <h1>Montage...</h1>
      <h3>Texte intro</h3>
      <p>Historique</p>

      <h3>Résumé télé</h3>

      <TVLogos/>

      <h3>Quelques vidéos</h3>

      <VideoStore />

      <h3>Sur le blog en ce moment</h3>


      <p>Lien vers IMDB</p>
      <p>LinkedIn</p>

      <h3>Contact</h3>

      <p></p>
    </div>
  );
};

export default Montage;
