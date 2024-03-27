import './VideoPlayer.css'

interface Props {
    src: string;
}

const VideoPlayer = ({ src }: Props) => {
    return (
        <div className='videocontainer'>
            <iframe
                className="videoplayer"
                src={src}
                title="Streaming video player"
                allowFullScreen
            />
        </div>
    )
}

export default VideoPlayer