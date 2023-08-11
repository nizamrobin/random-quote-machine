import QuoteCard from "./QuoteCardContainer";
import classes from "../styles/QuoteCard.module.css";

export default function QuoteCardContainer() {
  return (
    <article className={classes.quote_card_container}>
      <QuoteCard />
    </article>
  );
}
