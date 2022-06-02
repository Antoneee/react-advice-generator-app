import styles from "./AdviceCard.module.css";
import Pattern from "../Patterns/Pattern";
import Dice from "../Patterns/Dice";

const AdviceCard = (props) => {
  return (
    <section className={styles["advice-card__container"]}>
      <h2 className={styles["advice-card__number"]}>Advice #{props.id}</h2>
      <p className={styles["advice-card__text"]}>"{props.advice}"</p>
      <Pattern />
      <button className={styles["advice-card__button"]} onClick={props.fetch}>
        <Dice />
      </button>
    </section>
  );
};

export default AdviceCard;
