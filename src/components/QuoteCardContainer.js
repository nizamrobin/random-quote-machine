import QuoteCard from "./QuoteCard";
import classes from "../styles/QuoteCardContainer.module.css";

export default function QuoteCardContainer() {
  // Setting BackgrounColor to body
  const changeBgColor = (randomColor) => {
    document.body.style.backgroundColor = randomColor;
  };

  return (
    <article className={classes.quote_card_container}>
      <QuoteCard bgColorHandler={changeBgColor} />
    </article>
  );
}
