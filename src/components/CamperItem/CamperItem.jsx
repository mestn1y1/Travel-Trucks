import { Link } from "react-router-dom";
import Button from "../Button/Button";
import css from "./CamperItem.module.css";

export default function CamperItem({ camper }) {
  console.log(camper);
  return (
    <>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        className={css.previewImg}
      />
      <h2 className={css.itemTitle}>{camper.name}</h2>
      <Link to={`/catalog/${camper.id}`} className={css.link}>
        <Button text="Show more" />
      </Link>
    </>
  );
}
