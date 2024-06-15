import { mediaList } from "../../Data/media";
import Carousel from "react-grid-carousel";
import Lightbox from "../Lightbox";
import { useState } from "react";

const GridCarousel = () => {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [lightboxMedia, setLightboxMedia] = useState(0);

  return (
    <>
    <div className="row pt-4">
      <div className="col-12 text-center">
        <p className="fs-2">Media Grid Carousel with LightBox</p>
      </div>
      <div className="grid_carousel_container">
        <Carousel
          rows={1}
          cols={5}
          arrowLeft={<div role="button" className="cursor-pointer nav_btn">&#10094;</div>}
          arrowRight={<div role="button" className="cursor-pointer nav_btn">&#10095;</div>}
          responsiveLayout={[
            {
              breakpoint: 991.5,
              cols: 4,
            },
            {
              breakpoint: 767.5,
              cols: 3,
            },
            {
              breakpoint: 576,
              cols: 2,
            }
          ]}
          mobileBreakpoint={450}
        >
          {mediaList.map((media, index) =>
            <Carousel.Item key={index}>
              <div
                className={`media_container d-flex align-items-center justify-content-center`}
                onClick={() => { setLightboxMedia(index); setOpenLightbox(true); }}
              >
                {media.type === "photo" ?
                  <img src={media.url} alt="_image" className="media" draggable={false} />
                  :
                  <>
                    <video src={media.url} className="media" draggable={false} />
                    <div className="position-absolute fs-3 text-light media_overlay">
                      <i className="bi bi-play-circle-fill text-dark-emphasis d-flex justify-content-center align-items-center"></i>
                    </div>
                  </>
                }
              </div>
            </Carousel.Item>
          )}
        </Carousel>
      </div>
    </div>
    <Lightbox index={lightboxMedia} isOpen={openLightbox} media={mediaList} onCloseLightbox={() => setOpenLightbox(false)}/>
    </>
  )
}

export default GridCarousel;