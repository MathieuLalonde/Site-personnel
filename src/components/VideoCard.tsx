import './VideoPlayer.css'
import './VideoCard.css'
import Dot from '../assets/dot.svg'

interface Props {
    children: JSX.Element | JSX.Element[];
}

// src: string;
// thumb: string;
// title: string;
// date ?: string;
// labels ?: string;
// network ?: string;
// external ?: boolean;

const VideoCard = ({ children }: Props) => {

    // get thumbnail

    return (
        <div className='videocard'>
            <img className='videothumb' src={'https://img.youtube.com/vi/S9uIVSWPfIQ/0.jpg'} ></img>


            <br />
            <img src={Dot} />
            <div>
                Un titre ici (2024)
            </div>
        
            Radio-Canada
        
            <br />
            Il y a 1 mois
        
            <br />

            {/* <div className='videocontainer'>
                <iframe
                    className="videoplayer"
                    src={src + "&rel=0"}
                    title="Streaming video player"
                    allowFullScreen
                />
            </div> */}
        </div>
    )
}

export default VideoCard