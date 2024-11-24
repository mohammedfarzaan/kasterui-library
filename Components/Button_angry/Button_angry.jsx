import React from "react";
import styles from "./Button_angry.module.css";

const Button_angry = () => (
  <div>
    <button className={styles["reward-btn"]}>
      <span className={styles["IconContainer"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 60 20"
          className={styles["box-top"] + styles["box"]}
        >
          <path
            stroke-linecap="round"
            stroke-width="4"
            stroke="#6A8EF6"
            d="M2 18L58 18"
          ></path>
          <circle
            stroke-width="5"
            stroke="#6A8EF6"
            fill="#101218"
            r="7"
            cy="9.5"
            cx="20.5"
          ></circle>
          <circle
            stroke-width="5"
            stroke="#6A8EF6"
            fill="#101218"
            r="7"
            cy="9.5"
            cx="38.5"
          ></circle>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 58 44"
          className={styles["box-body"] + styles["box"]}
        >
          <mask fill="white" id="path-1-inside-1_81_19">
            <rect rx="3" height="44" width="58"></rect>
          </mask>
          <rect
            mask="url(#path-1-inside-1_81_19)"
            stroke-width="8"
            stroke="#6A8EF6"
            fill="#101218"
            rx="3"
            height="44"
            width="58"
          ></rect>
          <line
            stroke-width="6"
            stroke="#6A8EF6"
            y2="29"
            x2="58"
            y1="29"
            x1="-3.61529e-09"
          ></line>
          <path
            stroke-linecap="round"
            stroke-width="5"
            stroke="#6A8EF6"
            d="M45.0005 20L36 3"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="5"
            stroke="#6A8EF6"
            d="M21 3L13.0002 19.9992"
          ></path>
        </svg>

        <span className={styles["coin"]}></span>
      </span>
      <span className={styles["text"]}>Rewards</span>
    </button>
  </div>
);

export default Button_angry;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_angry = () => (
         <div>
          <button className="reward-btn">
  <span className="IconContainer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 60 20"
      className="box-top box"
    >
      <path
        stroke-linecap="round"
        stroke-width="4"
        stroke="#6A8EF6"
        d="M2 18L58 18"
      ></path>
      <circle
        stroke-width="5"
        stroke="#6A8EF6"
        fill="#101218"
        r="7"
        cy="9.5"
        cx="20.5"
      ></circle>
      <circle
        stroke-width="5"
        stroke="#6A8EF6"
        fill="#101218"
        r="7"
        cy="9.5"
        cx="38.5"
      ></circle>
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 58 44"
      className="box-body box"
    >
      <mask fill="white" id="path-1-inside-1_81_19">
        <rect rx="3" height="44" width="58"></rect>
      </mask>
      <rect
        mask="url(#path-1-inside-1_81_19)"
        stroke-width="8"
        stroke="#6A8EF6"
        fill="#101218"
        rx="3"
        height="44"
        width="58"
      ></rect>
      <line
        stroke-width="6"
        stroke="#6A8EF6"
        y2="29"
        x2="58"
        y1="29"
        x1="-3.61529e-09"
      ></line>
      <path
        stroke-linecap="round"
        stroke-width="5"
        stroke="#6A8EF6"
        d="M45.0005 20L36 3"
      ></path>
      <path
        stroke-linecap="round"
        stroke-width="5"
        stroke="#6A8EF6"
        d="M21 3L13.0002 19.9992"
      ></path>
    </svg>

    <span className="coin"></span>
  </span>
  <span className="text">Rewards</span>
</button>
        </div>
        );

        export default Button_angry;
        
        
         */
}
