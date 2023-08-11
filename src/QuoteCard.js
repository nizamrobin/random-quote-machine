import Quote from "./Quote";
import SocialIcon from "./SocialIcon";
import Button from "./Button";
import classes from "../styles/global.module.css";
import classes2 from "../styles/QuoteCard.module.css";

export default function QuoteCard() {
  return (
    <article className={classes.quote_card}>
      <Quote text="abcdef" author="nizam" />

      <section className={classes.buttons}>
        <div className="Social">
          <SocialIcon />
          <SocialIcon />
        </div>
        <Button />
      </section>

      <h4 className={classes2.developer}>by nizamrobin</h4>
    </article>
  );
}
