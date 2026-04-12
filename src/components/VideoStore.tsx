// import { Link } from "react-router-dom"
// import VideoCard from "./VideoCard";
import videostore from '../videos.json';

interface Props {
  label?: string
}

function VideoStore({ label = '' }: Props) {
  const search = () => {
    return videostore.filter(
      (video) =>
        video.labels.includes(label.toLowerCase())
    );
  };

  const results = label ? search() : videostore;

  return (
    <div className="videostore">
      {/* <h1 className="title">All Posts</h1> */}

      {results.length
        ? (
            results.map((video) => (
              <div key={video.id} className="video-card">
                {/* <VideoCard>{video}</VideoCard> */}
              </div>
            ))
          )
        : (
            <>
              <hr />
              Aucun article correspond à la recherche
            </>
          )}

    </div>
  );
}

export default VideoStore;

// < div >
// <div className="d-flex flex-nowrap">
//   <VideoCard src="https://www.youtube.com/watch?v=S9uIVSWPfIQ" />
//   <VideoCard src="https://www.youtube.com/watch?v=S9uIVSWPfIQ" />
//   <VideoCard src="https://www.youtube.com/watch?v=S9uIVSWPfIQ" />
//   <VideoCard src="https://www.youtube.com/watch?v=S9uIVSWPfIQ" />
//   <VideoCard src="https://www.youtube.com/watch?v=S9uIVSWPfIQ" />
// </div>
//   </div >

// src = ""
// thumb = ""
// title = ""
// date = ""
// labels = ""
// network = ""
// external = { false}
