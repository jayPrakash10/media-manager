import { useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import * as am from "array-move";

import { mediaList } from "../../Data/media";

const EasySort = () => {
  const [isSorting, SetIsSorting] = useState(false);
  const [medias, setMedias] = useState(mediaList);

  const isSortingChange = () => {
    SetIsSorting(!isSorting);
  }

  const onSortEnd = (oldIndex, newIndex) => {
    setMedias(am.arrayMoveImmutable(medias, oldIndex, newIndex));
  };

  return (
    <div className="row pt-sm-3 pt-lg-4">
      <div className="col-12 text-center">
        <p className="fs-2">Sortable Media</p>
      </div>
      <div className="col-12 text-end mb-2">
        {isSorting ?
          <button className="btn bg-primary text-light" onClick={isSortingChange}>
            Save
          </button>
          :
          <button className="btn btn-outline-primary bg-light text-primary" onClick={isSortingChange}>
            Sort
          </button>
        }
      </div>
      <SortableList
        onSortEnd={onSortEnd}
        className="media_list_container"
        draggedItemClassName="cursor-pointer"
        allowDrag={isSorting}
      >
        {medias.map((media, index) =>
          <SortableItem key={index}>
            <div className={`media_container d-flex align-items-center justify-content-center`}> {/* ${isSorting ? "wobble" : ""} */}
              {media.type === "photo" ?
                <img
                  src={media.url}
                  alt="_image"
                  draggable={false}
                  className="media cursor-pointer"
                />
              :
                <>
                  <video src={media.url} className="media" draggable={false}/>
                  <div className="position-absolute fs-3 text-light media_overlay">
                    <i className="bi bi-play-circle-fill d-flex justify-content-center align-items-center"></i>
                  </div>
                </>
              }
            </div>
          </SortableItem>
        )}
      </SortableList>
    </div>
  )
}

export default EasySort;