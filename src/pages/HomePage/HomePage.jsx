import css from "./HomePage.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function HomePage() {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.description}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog" className={css.link}>
          <Button text="View Now" type="button" />
        </Link>
      </div>
    </section>
  );
}
