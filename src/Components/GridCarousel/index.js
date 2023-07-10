import { mediaList } from "../../Data/media";
import Carousel from "react-grid-carousel";
import Lightbox from "../Lightbox";

const GridCarousel = () => {
  return (
    <>
    <div className="row pt-4">
      <div className="col-12 text-center">
        <p className="fs-2">Media Grid Carousel</p>
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
          {mediaList.map((media) =>
            <Carousel.Item>
              <div className={`media_container d-flex align-items-center justify-content-center`}> {/* ${isSorting ? "wobble" : ""} */}
                {media.type === "photo" ?
                  <img src={media.url} alt="_image" className="media" draggable={false} />
                  :
                  <>
                    <video src={media.url} className="media" draggable={false} />
                    <div className="position-absolute fs-3 text-light media_overlay">
                      <i className="bi bi-play-circle-fill d-flex justify-content-center align-items-center"></i>
                    </div>
                  </>
                }
              </div>
            </Carousel.Item>
          )}
        </Carousel>
      </div>
    </div>
    <Lightbox isOpen={false} media={mediaList}/>
    </>
  )
}

export default GridCarousel;