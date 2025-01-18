import { selectTotalItems } from "../../redux/campers/selectors";
import { useSelector } from "react-redux";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CampersList.module.css";

export default function CampersList({ campers = [], onclick }) {
  const totalItems = useSelector(selectTotalItems);
  return (
    <div className={css.wrapper}>
      <ul className={css.campersList}>
        {campers.map((camper) => (
          <li key={camper.id} className={css.camperItem}>
            <CamperItem camper={camper} />
          </li>
        ))}
      </ul>
      {/* {campers.length < totalItems && (
        <button className={css.loadMoreBtn} onClick={onclick}>
          Load more
        </button>
      )} */}
      {campers.length < totalItems && campers.length > 0 && (
        <button className={css.loadMoreBtn} onClick={onclick}>
          Load more
        </button>
      )}
    </div>
  );
}
