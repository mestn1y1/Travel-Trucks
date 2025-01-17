import css from "./Reviews.module.css";
import { selectCurrentCamper } from "../../redux/campers/selectors";
import { useSelector } from "react-redux";
import { Icon } from "../Icon/Icon";

export default function Reviews() {
  const { reviews } = useSelector(selectCurrentCamper);

  return (
    <ul className={css.reviewList}>
      {reviews.map((review, index) => {
        const { reviewer_rating, reviewer_name, comment } = review;
        const firstLetter = reviewer_name.charAt(0).toUpperCase();
        const rating = reviewer_rating;

        return (
          <li key={index} className={css.reviewItem}>
            <div className={css.reviewHeader}>
              <p className={css.reviewerInfo}>{firstLetter}</p>
              <div>
                <h3 className={css.reviewName}>{reviewer_name}</h3>
                <div className={css.iconsWrapper}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon
                      key={i}
                      iconName="star"
                      className={
                        i < rating ? css.iconActive : css.iconNotActive
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className={css.comment}>{comment}</p>
          </li>
        );
      })}
    </ul>
  );
}
