import { Link } from "react-router-dom";
import { useId } from "react";
import Button from "../Button/Button";

export default function CamperItem() {
  const camperId = useId();

  return (
    <>
      <Link to={`/catalog/${camperId}`}>
        <Button text="Show more" />
      </Link>
    </>
  );
}
