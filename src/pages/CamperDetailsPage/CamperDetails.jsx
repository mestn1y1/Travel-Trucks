import { Outlet, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchCamperById } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentCamper,
  selectIsLoading,
} from "../../redux/campers/selectors";
import { Icon } from "../../components/Icon/Icon";
import clsx from "clsx";
import css from "./CamperDetails.module.css";

const getClassName = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

export default function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const currentCamper = useSelector(selectCurrentCamper);
  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [id, dispatch]);

  return (
    <div className={css.wrapper}>
      {currentCamper ? (
        <>
          <h2 className={css.currentCamperText}>{currentCamper.name}</h2>
          <div className={css.ratingInfo}>
            <p className={css.camperRating}>
              <Icon iconName="star-pressed" className={css.iconsStar} />
              {currentCamper.rating}
              <span>({currentCamper.reviews.length} Reviews)</span>
            </p>
            <p className={css.camperLocation}>
              <Icon iconName="map" className={css.iconsStar} />
              {currentCamper.location}
            </p>
          </div>
          <p className={css.currentCamperText}>
            €{currentCamper.price.toFixed(2)}
          </p>

          <ul className={css.currentCamperGallery}>
            {currentCamper.gallery.map((item, index) => (
              <li key={index} className={css.galleryItem}>
                <img
                  src={item.original}
                  alt={`Gallery item ${index + 1}`}
                  className={css.galleryImage}
                />
              </li>
            ))}
          </ul>

          <p className={css.currentCamperDescription}>
            {currentCamper.description}
          </p>

          <ul className={css.currentCamperDetails}>
            <li>
              <NavLink to="features" className={getClassName}>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" className={getClassName}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </>
      ) : (
        <p className={css.errorText}>Camper details could not be loaded.</p>
      )}
      <hr className={css.horizontLine} />
      <Outlet />
    </div>
  );
}
