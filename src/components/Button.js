import classes from "../styles/Button.module.css";

export default function Button({ clickFunction, ...rest }) {
  return (
    <button
      type="button"
      className={classes.new_quote_btn}
      onClick={clickFunction}
      {...rest}
    >
      New Quote
    </button>
  );
}
