import PageTitle from '../components/PageTitle';
import VideoStore from '../components/VideoStore';


const Montage = () => {
  return (
    <>
      <PageTitle>Montage</PageTitle>
      
      <h1>Montage...</h1>
      <h3>Texte intro</h3>
      <p>Historique</p>

      <h3>Résumé télé</h3>
      <h3>Quelques vidéos</h3>

      <VideoStore />

      <h3>Sur le blog en ce moment</h3>


      <p>Lien vers IMDB</p>
      <p>LinkedIn</p>

      <h3>Contact</h3>
      <p>
        Mathieu Lalonde <br />
        5793, 2e avenue <br />
        Montréal, Qc <br />
        CANADA <br />
        514 842-7178 <br />
        moi@mathieulalonde.com <br />
      </p>
      <p></p>
    </>
  );
};

export default Montage;
