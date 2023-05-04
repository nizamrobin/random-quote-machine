import classes from "../styles/Button.module.css";

export default function Button({ onClickHandler }) {
  return (
    <button
      type="button"
      className={classes.new_quote_btn}
      onClick={onClickHandler}
    >
      New Quote
    </button>
  );
}
