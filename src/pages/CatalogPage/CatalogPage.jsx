import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import { ToastContainer } from "react-toastify";
import CampersList from "../../components/CampersList/CampersList";
import {
  selectCampers,
  selectIsLoading,
  selectCurrentPage,
} from "../../redux/campers/selectors.js";
import { fetchCampers } from "../../redux/campers/operations.js";
import { setCurrentPage } from "../../redux/campers/slice.js";
import css from "./CatalogPage.module.css";
import Loader from "../../components/Loader/Loader.jsx";
import "react-toastify/dist/ReactToastify.css";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectIsLoading);

  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, perPage: 4 }));
  }, [dispatch]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    dispatch(setCurrentPage(nextPage));
    dispatch(fetchCampers({ page: nextPage, perPage: 4 }));
  };

  return (
    <section className={css.catalogSection}>
      {loading && <Loader />}
      <Filter />
      <CampersList campers={campers} onclick={handleLoadMore} />
      <ToastContainer />
    </section>
  );
}
