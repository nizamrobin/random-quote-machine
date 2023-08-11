import Button from "./Button";
import Quote from "./Quote";
import classes from "../styles/CardContent.module.css";
import SocialLinks from "./SocialLInks";

export default function CardContent() {
  const changeQuote = () => {
    alert("ok");
    console.log("ok");
    // const change = true;
  };
  return (
    <div className={classes.card_content}>
      <Quote change />
      <>
        <SocialLinks />
        <Button onClickHandler={changeQuote} />
      </>
    </div>
  );
}
