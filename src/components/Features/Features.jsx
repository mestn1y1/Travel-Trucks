import { useSelector } from "react-redux";
import { generateAdvantages } from "../../utils/generateAdvantages";
import { selectCurrentCamper } from "../../redux/campers/selectors";
import { generateDetails } from "../../utils/generateDetails";
import { Icon } from "../Icon/Icon";
import css from "./Features.module.css";

export default function Features() {
  const currentCamper = useSelector(selectCurrentCamper);
  console.log(currentCamper);
  if (!currentCamper) {
    return <p>Camper details are not available.</p>;
  }

  const camperAdvantages = generateAdvantages(currentCamper);
  const camperDetails = generateDetails(currentCamper);

  return (
    <div className={css.wrapper}>
      <ul className={css.advantagesList}>
        {camperAdvantages.map(({ label, value, iconName }, index) => (
          <li className={css.advantagesItem} key={index}>
            <Icon iconName={iconName} className={css.iconAdvantages} />
            <span className={css.advantageText}>{value || label}</span>
          </li>
        ))}
      </ul>
      <div className={css.wrapDetails}>
        <h3 className={css.text}>Vehicle details</h3>
        <hr className={css.horizontLine} />
        <ul className={css.detailsList}>
          {camperDetails.map(({ label, value }, index) => (
            <li className={css.detailsItem} key={index}>
              <p className={css.detailText}>{label}</p>
              <span className={css.detailText}>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
