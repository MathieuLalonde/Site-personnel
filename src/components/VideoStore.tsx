// import { Link } from "react-router-dom"
// import VideoCard from "./VideoCard";
import videostore from "../videos.json"

interface Props {
  label?: string
}

const VideoStore = ({ label = "" }: Props) => {

  const search = () => {
    return videostore.filter(
      (video) =>
        video.labels.includes(label.toLowerCase())
    )
  }

  const results = label ? search() : videostore;

  return (
    <div className="videostore">
      {/* <h1 className="title">All Posts</h1> */}

      {results.length ? (
        results.map((video, i) => {
          
            console.log(video)

          return (
            // p.s. using i as the key is considered bad practice.
            <div key={i} className="video-card">
              {/* <VideoCard>{video}</VideoCard> */}
            </div>
          )
        })
      ) : (
        <>
          <hr />
          Aucun article correspond à la recherche
        </>
      )}

    </div>
  );
}

export default VideoStore



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