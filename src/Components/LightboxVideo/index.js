import "./style.scss";
import { useEffect, useRef, useState } from "react";

const VideoPlayer = ({
    className,
    src
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [containerDimension, setContainerDimension] = useState({
        height: 0,
        width: 0,
    });

    const videoRef = useRef();

    useEffect(() => {
        setIsPlaying(false);
    }, [src])

    useEffect(() => {
        setContainerDimension({
            height: videoRef.current.clientHeight,
            width: videoRef.current.clientWidth,
        });
    }, [videoRef?.current?.src]);

    const hidePauseBtn = () => {
        document.getElementById("video_pause_container")?.focus();
    }

    const showPauseBtn = () => {
        document.getElementById("video_pause_container")?.focus();
    }

    const pause = () => {
        videoRef.current.pause();
    }

    const play = () => {
        videoRef.current.play();
    }

    const onpause = () => {
        setIsPlaying(false);
    }

    const onplay = () => {
        setIsPlaying(true);
        setTimeout(() => {
            hidePauseBtn();
        }, 2000)
    }

    const onLoad = (element) => {
        setContainerDimension({
            height: element.target.clientHeight,
            width: element.target.clientWidth,
        });
    }

    return (
        <div id="video_container" className="video_container position-relative h-100 w-100 d-flex align-items-center justify-content-center">
            <video className={className} src={src} ref={videoRef} onLoadedData={(event) => onLoad(event)} onPlay={onplay} onPause={onpause}/>
            {isPlaying ?
                <div
                    id="video_pause_container"
                    className="position-absolute d-flex align-items-center justify-content-center control_container"
                    style={containerDimension}
                >
                    <div id="video_pause_btn" className="fs-1 video_pause_btn" onClick={pause}>
                        <i role="button" className="bi bi-pause-circle-fill"></i>
                    </div>
                </div>
                :
                <div
                    id="video_play_container"
                    className="position-absolute d-flex align-items-center justify-content-center control_container"
                    style={containerDimension}
                >
                    <div className="fs-1 video_play_btn" onClick={play}>
                        <i role="button" className="bi bi-play-circle-fill"></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default VideoPlayer;