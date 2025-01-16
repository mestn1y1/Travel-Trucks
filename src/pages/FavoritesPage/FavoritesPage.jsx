import CamperItem from "../../components/CamperItem/CamperItem";
import css from "./FavoritesPage.module.css";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import { selectIsLoading } from "../../redux/campers/selectors";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

export default function FavoritesPage() {
  const campers = useSelector(selectFavorites);
  const loading = useSelector(selectIsLoading);
  return (
    <>
      {loading && <Loader />}
      <ul className={css.campersList}>
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
      <Link to="/catalog">
        <Button text="To catalog" />
      </Link>
    </>
  );
}
