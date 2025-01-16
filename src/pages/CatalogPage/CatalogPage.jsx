import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import CampersList from "../../components/CampersList/CampersList";
import {
  selectCampers,
  selectIsLoading,
} from "../../redux/campers/selectors.js";
import { fetchCampers } from "../../redux/campers/operations.js";
import css from "./CatalogPage.module.css";
import Loader from "../../components/Loader/Loader.jsx";

export default function CatalogPage() {
  const campers = useSelector(selectCampers);
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  return (
    <section className={css.catalogSection}>
      {loading && <Loader />}
      <Filter />
      <CampersList campers={campers.items} />
    </section>
  );
}
