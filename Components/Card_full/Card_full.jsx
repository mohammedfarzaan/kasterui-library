import React from "react";
import styles from "./Card_full.module.css";

const Card_full = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__border"]}></div>
      <div className={styles["card_title__container"]}>
        <span className={styles["card_title"]}>Explosive Growth</span>
        <p className={styles["card_paragraph"]}>
          Perfect for your next content, leave to us and enjoy the result!
        </p>
      </div>
      <hr className={styles["line"]} />
      <ul className={styles["card__list"]}>
        <li className={styles["card__list_item"]}>
          <span className={styles["check"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className={styles["check_svg"]}
            >
              <path
                fillRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className={styles["list_text"]}>10 Launch Weeks</span>
        </li>
        <li className={styles["card__list_item"]}>
          <span className={styles["check"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className={styles["check_svg"]}
            >
              <path
                fillRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className={styles["list_text"]}>10 Influencers Post</span>
        </li>
        <li className={styles["card__list_item"]}>
          <span className={styles["check"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className={styles["check_svg"]}
            >
              <path
                fillRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className={styles["list_text"]}>100.000 Views</span>
        </li>
        <li className={styles["card__list_item"]}>
          <span className={styles["check"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className={styles["check_svg"]}
            >
              <path
                fillRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className={styles["list_text"]}>10 Reddit Posts</span>
        </li>
        <li className={styles["card__list_item"]}>
          <span className={styles["check"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className={styles["check_svg"]}
            >
              <path
                fillRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className={styles["list_text"]}>
            2 Hours Marketing Consultation
          </span>
        </li>
      </ul>
      <button className={styles["button"]}>Book a Call</button>
    </div>
  </div>
);

export default Card_full;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_full = () => (
         <div>
          <div className="card">
  <div className="card__border"></div>
  <div className="card_title__container">
    <span className="card_title">Explosive Growth</span>
    <p className="card_paragraph">
      Perfect for your next content, leave to us and enjoy the result!
    </p>
  </div>
  <hr className="line" />
  <ul className="card__list">
    <li className="card__list_item">
      <span className="check">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="check_svg"
        >
          <path
            fillRule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
      <span className="list_text">10 Launch Weeks</span>
    </li>
    <li className="card__list_item">
      <span className="check">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="check_svg"
        >
          <path
            fillRule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
      <span className="list_text">10 Influencers Post</span>
    </li>
    <li className="card__list_item">
      <span className="check">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="check_svg"
        >
          <path
            fillRule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
      <span className="list_text">100.000 Views</span>
    </li>
    <li className="card__list_item">
      <span className="check">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="check_svg"
        >
          <path
            fillRule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
      <span className="list_text">10 Reddit Posts</span>
    </li>
    <li className="card__list_item">
      <span className="check">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="check_svg"
        >
          <path
            fillRule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
      <span className="list_text">2 Hours Marketing Consultation</span>
    </li>
  </ul>
  <button className="button">Book a Call</button>
</div>
        </div>
        );

        export default Card_full;
        
        
         */
}
