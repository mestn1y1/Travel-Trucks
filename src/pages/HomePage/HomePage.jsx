import css from "./HomePage";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function HomePage() {
  return (
    <section>
      <Link to="/catalog">
        <Button text="View Now" type="button" />
      </Link>
    </section>
  );
}
