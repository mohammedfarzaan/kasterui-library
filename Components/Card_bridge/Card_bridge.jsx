import React from "react";
import styles from "./Card_bridge.module.css";

const Card_bridge = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__border"]}></div>
      <div className={styles["card_title__container"]}>
        <span className={styles["card_title"]}>Keys to Success</span>
        <p className={styles["card_paragraph"]}>
          Best way to be success in your life.
        </p>
      </div>
      <hr className={styles["line"]} />
      <ul className={styles["card__list"]}>
        <li className={styles["card__list_item"]}>
          <span className={styles["check"]}>
            <svg
              className={styles["check_svg"]}
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className={styles["list_text"]}>Set Clear Goals</span>
        </li>
        <li className={styles["card__list_item"]}>
          <span className={styles["check"]}>
            <svg
              className={styles["check_svg"]}
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className={styles["list_text"]}>Stay Organized</span>
        </li>
        <li className={styles["card__list_item"]}>
          <span className={styles["check"]}>
            <svg
              className={styles["check_svg"]}
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className={styles["list_text"]}>Continuous Learning</span>
        </li>
        <li className={styles["card__list_item"]}>
          <span className={styles["check"]}>
            <svg
              className={styles["check_svg"]}
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className={styles["list_text"]}>Time Management</span>
        </li>
        <li className={styles["card__list_item"]}>
          <span className={styles["check"]}>
            <svg
              className={styles["check_svg"]}
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className={styles["list_text"]}>
            Maintain a Positive Attitude
          </span>
        </li>
      </ul>
      <button className={styles["button"]}>Get Your Success</button>
    </div>
  </div>
);

export default Card_bridge;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_bridge = () => (
         <div>
          <div className="card">
  <div className="card__border"></div>
  <div className="card_title__container">
    <span className="card_title">Keys to Success</span>
    <p className="card_paragraph">Best way to be success in your life.</p>
  </div>
  <hr className="line" />
  <ul className="card__list">
    <li className="card__list_item">
      <span className="check">
        <svg
          className="check_svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            fillRule="evenodd"
          ></path>
        </svg>
      </span>
      <span className="list_text">Set Clear Goals</span>
    </li>
    <li className="card__list_item">
      <span className="check">
        <svg
          className="check_svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            fillRule="evenodd"
          ></path>
        </svg>
      </span>
      <span className="list_text">Stay Organized</span>
    </li>
    <li className="card__list_item">
      <span className="check">
        <svg
          className="check_svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            fillRule="evenodd"
          ></path>
        </svg>
      </span>
      <span className="list_text">Continuous Learning</span>
    </li>
    <li className="card__list_item">
      <span className="check">
        <svg
          className="check_svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            fillRule="evenodd"
          ></path>
        </svg>
      </span>
      <span className="list_text">Time Management</span>
    </li>
    <li className="card__list_item">
      <span className="check">
        <svg
          className="check_svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            fillRule="evenodd"
          ></path>
        </svg>
      </span>
      <span className="list_text">Maintain a Positive Attitude</span>
    </li>
  </ul>
  <button className="button">Get Your Success</button>
</div>
        </div>
        );

        export default Card_bridge;
        
        
         */
}
