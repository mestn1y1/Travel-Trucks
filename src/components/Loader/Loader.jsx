import { PuffLoader } from "react-spinners";
import css from "./Loader.module.css";
export default function Loader() {
  return (
    <div className={css.backdrop}>
      <PuffLoader color="#d84343" size={100} />
    </div>
  );
}
