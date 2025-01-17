import { Outlet, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import { fetchCamperById } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentCamper,
  selectIsLoading,
} from "../../redux/campers/selectors";
import { clearCurrentCamper } from "../../redux/campers/slice";

import { Icon } from "../../components/Icon/Icon";
import clsx from "clsx";
import css from "./CamperDetails.module.css";
import Loader from "../../components/Loader/Loader";
import BookingForm from "../../components/BookingForm/BookingForm";

const getClassName = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

export default function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const currentCamper = useSelector(selectCurrentCamper);

  useEffect(() => {
    dispatch(clearCurrentCamper());
    dispatch(fetchCamperById(id));
  }, [id, dispatch]);

  return (
    <div className={css.wrapper}>
      {loading && <Loader />}
      {currentCamper ? (
        <div className={css.content}>
          <h2 className={css.currentCamperText}>{currentCamper.name}</h2>
          <div className={css.ratingInfo}>
            <p className={css.camperRating}>
              <Icon iconName="star" className={css.iconsStar} />
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
          <hr className={css.horizontLine} />
          <div className={css.wrapperBottom}>
            <div className={css.outlet}>
              <Outlet />
            </div>
            <div className={css.formWrapper}>
              <BookingForm />
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
