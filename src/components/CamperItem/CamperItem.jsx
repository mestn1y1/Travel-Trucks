import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { generateAdvantages } from "../../utils/generateAdvantages";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice";

import { Icon } from "../Icon/Icon";
import { selectFavorites } from "../../redux/favorites/selectors";
import css from "./CamperItem.module.css";

export default function CamperItem({ camper }) {
  const camperAdvantages = generateAdvantages(camper).slice(0, 6);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((item) => item.id === camper.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper.id));
    } else {
      dispatch(addFavorite(camper));
    }
  };
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
          <p className={css.camperHeaderPrice}>€{camper.price.toFixed(2)}</p>
          <button className={css.camperHeaderBtn} onClick={toggleFavorite}>
            <Icon
              iconName={isFavorite ? "heart-select" : "heart-default"}
              className={css.heartIcon}
            />
          </button>
        </div>
        <div className={css.camperSubHeader}>
          <p className={css.camperRating}>
            <Icon iconName="star" className={css.iconsStar} />
            {camper.rating}
            <span>({camper.reviews.length} Reviews)</span>
          </p>
          <p className={css.camperLocation}>
            <Icon iconName="map" className={css.iconsStar} />
            {camper.location}
          </p>
        </div>
        <p className={css.camperDescription}>{camper.description}</p>
        <ul className={css.advantagesList}>
          {camperAdvantages.map(({ label, value, iconName }, index) => (
            <li className={css.advantagesItem} key={index}>
              <Icon iconName={iconName} className={css.iconAdvantages} />
              <span className={css.advantageText}>{value || label}</span>
            </li>
          ))}
        </ul>
        <Link to={`/catalog/${camper.id}`} className={css.link}>
          <Button text="Show more" />
        </Link>
      </div>
    </>
  );
}
