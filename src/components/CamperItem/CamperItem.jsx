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
      <div className={css.wrapper}>
        <div className={css.camperHeader}>
          <h2 className={css.camperHeaderText}>{camper.name}</h2>
          <p className={css.camperHeaderText}>€{camper.price.toFixed(2)}</p>
          {/* <button className={css.camperHeaderBtn}>heart</button> */}
        </div>
        <div className={css.camperSubHeader}>
          <p className={css.camperRating}>
            {camper.rating}
            <span>({camper.reviews.length} Reviews)</span>
          </p>
          <p className={css.camperLocation}>{camper.location}</p>
        </div>
        <p className={css.camperDescription}>{camper.description}</p>
        <Link to={`/catalog/${camper.id}`} className={css.link}>
          <Button text="Show more" />
        </Link>
      </div>
    </>
  );
}
