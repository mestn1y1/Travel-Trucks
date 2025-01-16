import { useSelector } from "react-redux";
import { generateAdvantages } from "../../utils/generateAdvantages";
import { selectCurrentCamper } from "../../redux/campers/selectors";
import { Icon } from "../Icon/Icon";
import css from "./Features.module.css";

export default function Features() {
  const currentCamper = useSelector(selectCurrentCamper);

  if (!currentCamper) {
    return <p>Camper details are not available.</p>;
  }

  const camperAdvantages = generateAdvantages(currentCamper);

  return (
    <ul className={css.advantagesList}>
      {camperAdvantages.map(({ label, value, iconName }, index) => (
        <li className={css.advantagesItem} key={index}>
          <Icon iconName={iconName} className={css.iconAdvantages} />
          <span className={css.advantageText}>{value || label}</span>
        </li>
      ))}
    </ul>
  );
}
