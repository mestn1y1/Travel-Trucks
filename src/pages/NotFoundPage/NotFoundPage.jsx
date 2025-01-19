import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Not found 404</h2>
      <Link to="/">
        <Button text="Back Home" />
      </Link>
    </div>
  );
}
