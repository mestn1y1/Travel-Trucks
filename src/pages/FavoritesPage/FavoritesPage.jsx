import CamperItem from "../../components/CamperItem/CamperItem";
import css from "./FavoritesPage.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import { selectIsLoading } from "../../redux/campers/selectors";
import Loader from "../../components/Loader/Loader";

export default function FavoritesPage() {
  const campers = useSelector(selectFavorites);
  const loading = useSelector(selectIsLoading);
  return (
    <div className={css.wrapper}>
      <ul className={css.campersList}>
        {loading && <Loader />}
        {campers.length > 0 ? (
          campers.map((camper) => (
            <li key={camper.id} className={css.camperItem}>
              <CamperItem camper={camper} />
            </li>
          ))
        ) : (
          <h2 className={css.favoritesText}>No favorites added</h2>
        )}
      </ul>
      <ToastContainer />
    </div>
  );
}
