import { useState } from "react";
import "./style.scss";

const Lightbox = ({
  isOpen,
  media,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="d-flex align-items-center h-100 px-3 px-sm-4 px-lg-5 py-5">
        <div className="modal-body text-light">
          <div className="lightbox_modal d-flex align-items-center">
            <div className="lightbox_previous">
              <i class="bi bi-caret-left-fill" role="button" onClick={previousSlide}></i>
            </div>
            <div className="lightbox_media_container flex-grow-1 h-100 d-flex align-items-center justify-content-center user-select-none mx-3">
              {media[currentIndex]?.type === "photo" ?
                <img src={media[currentIndex].url} alt="_image" className="lightbox_media"/>
                :
                <video
                  className="lightbox_media"
                  src={media[currentIndex].url}
                  controls
                />
              }
            </div>
            <div className="lightbox_next">
              <i class="bi bi-caret-right-fill" role="button" onClick={nextSlide}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lightbox;