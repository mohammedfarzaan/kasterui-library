import React from "react";
import styles from "./Button_away.module.css";

const Button_away = () => (
  <div>
    <button className={styles["reward-btn"]}>
      <span className={styles["IconContainer"]}>
        <svg
          className="box-top box"
          viewBox="0 0 60 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 18L58 18"
            stroke="#6A8EF6"
            strokeWidth="4"
            strokeLinecap="round"
          ></path>
          <circle
            cx="20.5"
            cy="9.5"
            r="7"
            fill="#101218"
            stroke="#6A8EF6"
            strokeWidth="5"
          ></circle>
          <circle
            cx="38.5"
            cy="9.5"
            r="7"
            fill="#101218"
            stroke="#6A8EF6"
            strokeWidth="5"
          ></circle>
        </svg>

        <svg
          className="box-body box"
          viewBox="0 0 58 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_81_19" fill="white">
            <rect width="58" height="44" rx="3"></rect>
          </mask>
          <rect
            width="58"
            height="44"
            rx="3"
            fill="#101218"
            stroke="#6A8EF6"
            strokeWidth="8"
            mask="url(#path-1-inside-1_81_19)"
          ></rect>
          <line
            x1="-3.61529e-09"
            y1="29"
            x2="58"
            y2="29"
            stroke="#6A8EF6"
            strokeWidth="6"
          ></line>
          <path
            d="M45.0005 20L36 3"
            stroke="#6A8EF6"
            strokeWidth="5"
            strokeLinecap="round"
          ></path>
          <path
            d="M21 3L13.0002 19.9992"
            stroke="#6A8EF6"
            strokeWidth="5"
            strokeLinecap="round"
          ></path>
        </svg>

        <span className={styles["coin"]}></span>
      </span>
      <span className={styles["text"]}>Rewards</span>
    </button>
  </div>
);

export default Button_away;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_away = () => (
         <div>
          <button className="reward-btn">
  <span className="IconContainer">
    <svg
      className="box-top box"
      viewBox="0 0 60 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 18L58 18"
        stroke="#6A8EF6"
        strokeWidth="4"
        strokeLinecap="round"
      ></path>
      <circle
        cx="20.5"
        cy="9.5"
        r="7"
        fill="#101218"
        stroke="#6A8EF6"
        strokeWidth="5"
      ></circle>
      <circle
        cx="38.5"
        cy="9.5"
        r="7"
        fill="#101218"
        stroke="#6A8EF6"
        strokeWidth="5"
      ></circle>
    </svg>

    <svg
      className="box-body box"
      viewBox="0 0 58 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_81_19" fill="white">
        <rect width="58" height="44" rx="3"></rect>
      </mask>
      <rect
        width="58"
        height="44"
        rx="3"
        fill="#101218"
        stroke="#6A8EF6"
        strokeWidth="8"
        mask="url(#path-1-inside-1_81_19)"
      ></rect>
      <line
        x1="-3.61529e-09"
        y1="29"
        x2="58"
        y2="29"
        stroke="#6A8EF6"
        strokeWidth="6"
      ></line>
      <path
        d="M45.0005 20L36 3"
        stroke="#6A8EF6"
        strokeWidth="5"
        strokeLinecap="round"
      ></path>
      <path
        d="M21 3L13.0002 19.9992"
        stroke="#6A8EF6"
        strokeWidth="5"
        strokeLinecap="round"
      ></path>
    </svg>

    <span className="coin"></span>
  </span>
  <span className="text">Rewards</span>
</button>
        </div>
        );

        export default Button_away;
        
        
         */
}
