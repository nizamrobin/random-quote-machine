import classes from "../styles/Quote.module.css";

export default function Quote({ text, author, ...rest }) {
  return (
    <section className={classes.quote} {...rest}>
      <p className={classes.quote_text}>
        <span className={classes.quote_icon}>"</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {text}
      </p>
      <aside className={classes.author}>
        <span>-</span>
        {author}
      </aside>
    </section>
  );
}
