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

    let moveDetect;

    useEffect(() => {
        setIsPlaying(false);
    }, [src])

    useEffect(() => {
        setContainerDimension({
            height: videoRef.current.clientHeight,
            width: videoRef.current.clientWidth,
        });
    }, [videoRef?.current?.src]);

    const pause = () => {
        videoRef.current.pause();
    }

    const play = () => {
        videoRef.current.play();
    }

    const onMouseMove = () => {
        if(isPlaying) {
            clearInterval(moveDetect);
            document.getElementById("video_pause_container")?.blur();
            document.getElementById("video_pause_btn")?.classList.remove("hide_btn");
            document.getElementById("video_pause_btn")?.classList.add("show_btn");
            document.getElementById("video_pause_container")?.classList.remove("hide_cursor");
            document.getElementById("video_pause_container")?.classList.add("show_cursor");

            moveDetect = setTimeout(() => {
                document.getElementById("video_pause_container")?.focus();
                document.getElementById("video_pause_btn")?.classList.remove("show_btn");
                document.getElementById("video_pause_btn")?.classList.add("hide_btn");
                document.getElementById("video_pause_container")?.classList.remove("show_cursor");
                document.getElementById("video_pause_container")?.classList.add("hide_cursor");
                console.log("mouseStoped");
            }, 2000)
        }
    }

    const onpause = () => {
        console.log("stop");
        setIsPlaying(false);
    }

    const onplay = () => {
        setIsPlaying(true);
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
                    className="position-absolute show_cursor d-flex align-items-center justify-content-center control_container"
                    style={containerDimension}
                    onMouseMove={() => onMouseMove()}
                >
                    <div id="video_pause_btn" className="fs-1 hide_btn" onClick={pause}>
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