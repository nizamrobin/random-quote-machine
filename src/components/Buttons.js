import SocialLinks from "./SocialLInks";
import Button from "./Button";
import classes from "../styles/Buttons.module.css";

export default function Buttons() {
  return (
    <section className={classes.buttons}>
      <SocialLinks />
      <Button />
    </section>
  );
}
