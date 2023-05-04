import React from "react";
import classes from "../styles/SocialIcon.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialIcon(props) {
  return (
    <a href={props.href} className={classes.social_icon} style={props.style}>
      <FontAwesomeIcon icon={props.icon} />
    </a>
  );
}
