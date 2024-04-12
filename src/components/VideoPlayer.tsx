import './VideoPlayer.css'


interface Props {
    src: string;
}

const VideoPlayer = ({ src }: Props) => {
    return (
        <div className='videocontainer'>
            <iframe
                className="videoplayer"
                src={src + "&vq=hd1080p&rel=0"}
                title="Streaming video player"
                allowFullScreen
            />
        </div>
    )
}

export default VideoPlayer