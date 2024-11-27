import React from "react";
import styles from "./Button_offer.module.css";

const Button_offer = () => (
  <div>
    <button className={styles["readmore-btn"]}>
      <span className={styles["book-wrapper"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="rgb(86, 69, 117)"
          viewBox="0 0 126 75"
          className="book"
        >
          <rect
            strokeWidth="3"
            stroke="#fff"
            rx="7.5"
            height="70"
            width="121"
            y="2.5"
            x="2.5"
          ></rect>
          <line
            strokeWidth="3"
            stroke="#fff"
            y2="75"
            x2="63.5"
            x1="63.5"
          ></line>
          <path
            strokeLinecap="round"
            strokeWidth="4"
            stroke="#fff"
            d="M25 20H50"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="4"
            stroke="#fff"
            d="M101 20H76"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="4"
            stroke="#fff"
            d="M16 30L50 30"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="4"
            stroke="#fff"
            d="M110 30L76 30"
          ></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 65 75"
          className="book-page"
        >
          <path
            strokeLinecap="round"
            strokeWidth="4"
            stroke="#fff"
            d="M40 20H15"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="4"
            stroke="#fff"
            d="M49 30L15 30"
          ></path>
          <path
            strokeWidth="3"
            stroke="#fff"
            d="M2.5 2.5H55C59.1421 2.5 62.5 5.85786 62.5 10V65C62.5 69.1421 59.1421 72.5 55 72.5H2.5V2.5Z"
          ></path>
        </svg>
      </span>
      <span className={styles["text"]}> Read more </span>
    </button>
  </div>
);

export default Button_offer;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_offer = () => (
         <div>
          <button className="readmore-btn">
  <span className="book-wrapper">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="rgb(86, 69, 117)"
      viewBox="0 0 126 75"
      className="book"
    >
      <rect
        strokeWidth="3"
        stroke="#fff"
        rx="7.5"
        height="70"
        width="121"
        y="2.5"
        x="2.5"
      ></rect>
      <line strokeWidth="3" stroke="#fff" y2="75" x2="63.5" x1="63.5"></line>
      <path
        strokeLinecap="round"
        strokeWidth="4"
        stroke="#fff"
        d="M25 20H50"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="4"
        stroke="#fff"
        d="M101 20H76"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="4"
        stroke="#fff"
        d="M16 30L50 30"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="4"
        stroke="#fff"
        d="M110 30L76 30"
      ></path>
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 65 75"
      className="book-page"
    >
      <path
        strokeLinecap="round"
        strokeWidth="4"
        stroke="#fff"
        d="M40 20H15"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="4"
        stroke="#fff"
        d="M49 30L15 30"
      ></path>
      <path
        strokeWidth="3"
        stroke="#fff"
        d="M2.5 2.5H55C59.1421 2.5 62.5 5.85786 62.5 10V65C62.5 69.1421 59.1421 72.5 55 72.5H2.5V2.5Z"
      ></path>
    </svg>
  </span>
  <span className="text"> Read more </span>
</button>
        </div>
        );

        export default Button_offer;
        
        
         */
}
