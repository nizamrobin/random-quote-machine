import Quote from "./Quote";
import SocialIcon from "./SocialIcon";
import Button from "./Button";
import "../styles/global.css";
import classes from "../styles/QuoteCard.module.css";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faB } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import RandomNumber from "../components/RandomNumber";
import RandomColorGenerator from "./RandomColorGenerator";
library.add(faB, faFacebook, faTwitter);

export default function QuoteCard(props) {
  // console.log(props.style);
  const [data, setData] = useState([]);
  const [randomNum, setRandomNum] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  // Fetching data from API
  const fetchData = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setRandomNum(RandomNumber(data.length - 1));
      });
  };
  const onClickHandler = () => {
    setRandomNum(RandomNumber(data.length - 1));
  };

  // Color Generator
  const randomColor = RandomColorGenerator();
  props.bgColorHandler(randomColor);

  return (
    data.length > 0 && (
      <article className={classes.quote_card}>
        <Quote
          text={data[randomNum].text}
          author={data[randomNum].author}
          style={{ color: randomColor }}
        />

        <section className="buttons">
          <div className="Social">
            <SocialIcon
              style={{ backgroundColor: randomColor }}
              icon={["fab", "facebook"]}
              href={
                "https://www.facebook.com/dialog/feed?app_id=3388808611377467&display=popup&href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorert"
              }
            />
            <SocialIcon
              style={{ backgroundColor: randomColor }}
              icon={["fab", "twitter"]}
              href={
                "https://twitter.com/intent/tweet?text=" +
                data[randomNum].text +
                "  -" +
                data[randomNum].author
              }
            />
          </div>
          <Button
            clickFunction={onClickHandler}
            d={data.length}
            style={{ backgroundColor: randomColor }}
          />
        </section>

        <h4 className="developer" style={{ color: randomColor }}>
          by nizamrobin
        </h4>
      </article>
    )
  );
}
