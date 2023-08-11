// import { useEffect, useState } from "react";
import classes from "../styles/Quote.module.css";
// import RandomNumber from "./RandomNumber";

export default function Quote({ text, author }) {
  // console.log(props.change);
  // const [data, setData] = useState([]);
  // const [randomNum, setRandomNum] = useState();
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = () => {
  //   fetch("https://type.fit/api/quotes")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //       setRandomNum(RandomNumber(data.length - 1));
  //     });
  // };
  // callApi = fetchData();
  return (
    <section className={classes.quote}>
      <p className={classes.quote_text}>
        <span className={classes.quote_icon}>"</span>
        {text}
      </p>
      <aside className={classes.author}>
        <span>-</span>
        {author}
      </aside>
    </section>
  );
}
