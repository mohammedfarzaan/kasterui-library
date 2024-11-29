import React from "react";
import styles from "./Button_rope.module.css";

const Button_rope = () => (
  <div>
    <button className={styles["button"]}>
      <p className={styles["button__text"]}>
        <span style="--index: 0;">A</span>
        <span style="--index: 1;">W</span>
        <span style="--index: 2;">E</span>
        <span style="--index: 3;">S</span>
        <span style="--index: 4;">O</span>
        <span style="--index: 5;">M</span>
        <span style="--index: 6;">E</span>
        <span style="--index: 7;"> </span>
        <span style="--index: 8;">C</span>
        <span style="--index: 9;">S</span>
        <span style="--index: 10;">S</span>
        <span style="--index: 11;"> </span>
        <span style="--index: 12;">B</span>
        <span style="--index: 13;">U</span>
        <span style="--index: 14;">T</span>
        <span style="--index: 15;">T</span>
        <span style="--index: 16;">O</span>
        <span style="--index: 17;">N</span>
      </p>

      <div className={styles["button__circle"]}>
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["button__icon"]}
          width="14"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>

        <svg
          viewBox="0 0 14 15"
          fill="none"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["button__icon"] + styles["button__icon--copy"]}
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </button>
  </div>
);

export default Button_rope;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_rope = () => (
         <div>
          <button className="button">
  <p className="button__text">
    <span style="--index: 0;">A</span>
    <span style="--index: 1;">W</span>
    <span style="--index: 2;">E</span>
    <span style="--index: 3;">S</span>
    <span style="--index: 4;">O</span>
    <span style="--index: 5;">M</span>
    <span style="--index: 6;">E</span>
    <span style="--index: 7;"> </span>
    <span style="--index: 8;">C</span>
    <span style="--index: 9;">S</span>
    <span style="--index: 10;">S</span>
    <span style="--index: 11;"> </span>
    <span style="--index: 12;">B</span>
    <span style="--index: 13;">U</span>
    <span style="--index: 14;">T</span>
    <span style="--index: 15;">T</span>
    <span style="--index: 16;">O</span>
    <span style="--index: 17;">N</span>
  </p>

  <div className="button__circle">
    <svg
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="button__icon"
      width="14"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>

    <svg
      viewBox="0 0 14 15"
      fill="none"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
      className="button__icon button__icon--copy"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>
        </div>
        );

        export default Button_rope;
        
        
         */
}
