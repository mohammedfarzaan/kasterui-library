import React from "react";
import styles from "./Button_remain.module.css";

const Button_remain = () => (
  <div>
    <ul className={styles["wrapper"]}>
      <li className={styles["icon"] + styles["black"]}>
        <span className={styles["tooltip"]}>UP</span>
        <span>
          <svg
            viewBox="0 0 16 16"
            className="bi bi-chevron-double-up"
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
              fillRule="evenodd"
            ></path>
            <path
              d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
      </li>
      <li className={styles["icon"] + styles["black"]}>
        <span className={styles["tooltip"]}>Down</span>
        <span>
          <svg
            viewBox="0 0 16 16"
            className="bi bi-chevron-double-down"
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              fillRule="evenodd"
            ></path>
            <path
              d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
      </li>
      <li className={styles["icon"] + styles["black"]}>
        <span className={styles["tooltip"]}>Left</span>
        <span>
          <svg
            viewBox="0 0 16 16"
            className="bi bi-chevron-double-left"
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              fillRule="evenodd"
            ></path>
            <path
              d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
      </li>
      <li className={styles["icon"] + styles["black"]}>
        <span className={styles["tooltip"]}>Right</span>
        <span>
          <svg
            viewBox="0 0 16 16"
            className="bi bi-chevron-double-right"
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
              fillRule="evenodd"
            ></path>
            <path
              d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
      </li>
    </ul>
  </div>
);

export default Button_remain;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_remain = () => (
         <div>
          <ul className="wrapper">
    <li className="icon black">
        <span className="tooltip">UP</span>
        <span><svg viewBox="0 0 16 16" className="bi bi-chevron-double-up" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" fillRule="evenodd"></path>
  <path d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" fillRule="evenodd"></path>
</svg></span>
    </li>
    <li className="icon black">
        <span className="tooltip">Down</span>
        <span><svg viewBox="0 0 16 16" className="bi bi-chevron-double-down" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" fillRule="evenodd"></path>
  <path d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" fillRule="evenodd"></path>
</svg></span>
    </li>
    <li className="icon black">
        <span className="tooltip">Left</span>
        <span><svg viewBox="0 0 16 16" className="bi bi-chevron-double-left" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" fillRule="evenodd"></path>
  <path d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" fillRule="evenodd"></path>
</svg></span>
    </li>
     <li className="icon black">
        <span className="tooltip">Right</span>
        <span><svg viewBox="0 0 16 16" className="bi bi-chevron-double-right" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" fillRule="evenodd"></path>
  <path d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" fillRule="evenodd"></path>
</svg></span>
    </li>
</ul>
        </div>
        );

        export default Button_remain;
        
        
         */
}
