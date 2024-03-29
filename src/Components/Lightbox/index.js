import "./style.scss";
import { useEffect, useState } from "react";
import VideoPlayer from "../LightboxVideo";

const Lightbox = ({
  index,
  isOpen,
  media,
  onCloseLightbox,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(index);
  }, [index]);

  const nextSlide = () => {
    if(currentIndex + 1 <= media.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  const previousSlide = () => {
    if(currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(media.length - 1);
    }
  }

  return (
    <div className={`modal ${isOpen && 'd-block'}`} tabIndex={-1}>
      <div className="position-absolute end-0 top-0 mt-4 me-4 z-3" onClick={onCloseLightbox}>
        <i role="button" className="bi bi-x-lg text-light"></i>
      </div>
        
      <div className="d-flex align-items-center h-100 px-3 px-sm-4 px-lg-5 py-3 py-sm-5 z-2">
        <div className="modal-body text-light px-0 px-sm-3 h-100">
          <div className="lightbox_modal h-100 d-flex align-items-center">
            <div className="lightbox_previous">
              <i className="bi bi-caret-left-fill" role="button" onClick={previousSlide}></i>
            </div>
            <div className="lightbox_media_container flex-grow-1 h-100 d-flex align-items-center justify-content-center user-select-none mx-3">
              {media[currentIndex]?.type === "photo" ?
                <img src={media[currentIndex].url} alt="_image" className="lightbox_media"/>
                :
                <VideoPlayer
                  className="lightbox_media"
                  src={media[currentIndex].url}
                />
              }
            </div>
            <div className="lightbox_next">
              <i className="bi bi-caret-right-fill" role="button" onClick={nextSlide}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lightbox;