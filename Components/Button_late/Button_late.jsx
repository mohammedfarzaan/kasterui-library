import React from "react";
import styles from "./Button_late.module.css";

const Button_late = () => (
  <div>
    <button className={styles["enter-button"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 27"
        className={styles["arrow"]}
      >
        <line
          stroke-width="2"
          stroke="white"
          y2="14"
          x2="40"
          y1="14"
          x1="1"
        ></line>
        <line
          stroke-width="2"
          stroke="white"
          y2="1.41537"
          x2="10.4324"
          y1="14.2433"
          x1="1.18869"
        ></line>
        <line
          stroke-width="2"
          stroke="white"
          y2="13.6007"
          x2="1.20055"
          y1="26.2411"
          x1="10.699"
        ></line>
        <line
          stroke="white"
          y2="14.3133"
          x2="1.07325"
          y1="13.6334"
          x1="0.33996"
        ></line>
        <line
          stroke-width="2"
          stroke="white"
          y2="13"
          x2="39"
          y1="8"
          x1="39"
        ></line>
      </svg>
      ENTER
    </button>
  </div>
);

export default Button_late;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_late = () => (
         <div>
          <button className="enter-button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 27"
    className="arrow"
  >
    <line stroke-width="2" stroke="white" y2="14" x2="40" y1="14" x1="1"></line>
    <line
      stroke-width="2"
      stroke="white"
      y2="1.41537"
      x2="10.4324"
      y1="14.2433"
      x1="1.18869"
    ></line>
    <line
      stroke-width="2"
      stroke="white"
      y2="13.6007"
      x2="1.20055"
      y1="26.2411"
      x1="10.699"
    ></line>
    <line
      stroke="white"
      y2="14.3133"
      x2="1.07325"
      y1="13.6334"
      x1="0.33996"
    ></line>
    <line stroke-width="2" stroke="white" y2="13" x2="39" y1="8" x1="39"></line>
  </svg>
  ENTER
</button>
        </div>
        );

        export default Button_late;
        
        
         */
}
