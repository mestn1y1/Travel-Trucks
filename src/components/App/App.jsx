import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Features = lazy(() => import("../../components/Features/Features"));
const Reviews = lazy(() => import("../../components/Reviews/Reviews"));
const NavBar = lazy(() => import("../NavBar/NavBar"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const CamperDetailsPage = lazy(() =>
  import("../../pages/CamperDetailsPage/CamperDetails")
);
const FavoritesPage = lazy(() =>
  import("../../pages/FavoritesPage/FavoritesPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="features" element={<Features />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
