import css from "./Button.module.css";

export default function Button({ text, onClick, type }) {
  return (
    <button onClick={onClick} className={css.btn} type={type}>
      {text}
    </button>
  );
}
