import { Outlet, NavLink } from "react-router-dom";

export default function CamperDetailsPage() {
  return (
    <>
      <h2>CamperPagqe</h2>
      <ul>
        <li>
          <NavLink to="features">Features</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
