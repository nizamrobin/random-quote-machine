import classes from "../styles/SocialIcon.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";

export default function SocialIcon() {
  return (
    <a href="#a" className={`twitter ${classes.social_icon}`}>
      <i class="fa-brands fa-twitter"></i>
    </a>
  );
}
