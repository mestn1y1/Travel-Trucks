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
const NotFoundPage = lazy(() => import("../../pages/NotFounPage/NotFoundPage"));
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
