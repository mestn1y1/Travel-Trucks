import CamperItem from "../CamperItem/CamperItem";
import css from "./CampersList.module.css";

export default function CampersList({ campers = [] }) {
  return (
    <ul className={css.campersList}>
      {campers.map((camper) => (
        <li key={camper.id} className={css.camperItem}>
          <CamperItem camper={camper} />
        </li>
      ))}
    </ul>
  );
}
