import React from "react";
import styles from "./Button_nails.module.css";

const Button_nails = () => (
  <div>
    <button className={styles["reward-btn"]}>
      <span className={styles["IconContainer"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 60 20"
          className="box-top box"
        >
          <path
            strokeLinecap="round"
            strokeWidth="4"
            stroke="#6A8EF6"
            d="M2 18L58 18"
          ></path>
          <circle
            strokeWidth="5"
            stroke="#6A8EF6"
            fill="#101218"
            r="7"
            cy="9.5"
            cx="20.5"
          ></circle>
          <circle
            strokeWidth="5"
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
            strokeWidth="8"
            stroke="#6A8EF6"
            fill="#101218"
            rx="3"
            height="44"
            width="58"
          ></rect>
          <line
            strokeWidth="6"
            stroke="#6A8EF6"
            y2="29"
            x2="58"
            y1="29"
            x1="-3.61529e-09"
          ></line>
          <path
            strokeLinecap="round"
            strokeWidth="5"
            stroke="#6A8EF6"
            d="M45.0005 20L36 3"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="5"
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

export default Button_nails;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_nails = () => (
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
        strokeLinecap="round"
        strokeWidth="4"
        stroke="#6A8EF6"
        d="M2 18L58 18"
      ></path>
      <circle
        strokeWidth="5"
        stroke="#6A8EF6"
        fill="#101218"
        r="7"
        cy="9.5"
        cx="20.5"
      ></circle>
      <circle
        strokeWidth="5"
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
        strokeWidth="8"
        stroke="#6A8EF6"
        fill="#101218"
        rx="3"
        height="44"
        width="58"
      ></rect>
      <line
        strokeWidth="6"
        stroke="#6A8EF6"
        y2="29"
        x2="58"
        y1="29"
        x1="-3.61529e-09"
      ></line>
      <path
        strokeLinecap="round"
        strokeWidth="5"
        stroke="#6A8EF6"
        d="M45.0005 20L36 3"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="5"
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

        export default Button_nails;
        
        
         */
}
