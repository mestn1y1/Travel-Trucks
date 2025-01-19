import { useState } from "react";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CampersList.module.css";

export default function CampersList({ campers = [] }) {
  const [items, setItems] = useState(4);
  const handleLoadMore = () => {
    setItems((prevCount) => prevCount + 4);
  };
  if (campers.length === 0) {
    return <p className={css.infoText}>Not results found</p>;
  }

  return (
    <div className={css.wrapper}>
      <ul className={css.campersList}>
        {campers.slice(0, items).map((camper) => (
          <li key={camper.id} className={css.camperItem}>
            <CamperItem camper={camper} />
          </li>
        ))}
      </ul>
      {items < campers.length && (
        <button className={css.loadMoreBtn} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
}
