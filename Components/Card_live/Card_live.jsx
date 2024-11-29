import React from "react";
import styles from "./Card_live.module.css";

const Card_live = () => (
  <div>
    <div className={styles["gender-card"]}>
      <div className={styles["large-svg-container"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 50 90"
          className={styles["largemalesvg"]}
          height="90"
          width="50"
        >
          <circle
            strokeWidth="6"
            stroke="#76E3FE"
            r="22"
            cy="25"
            cx="25"
          ></circle>
          <path
            strokeLinecap="round"
            strokeWidth="6"
            stroke="#76E3FE"
            d="M25 47L25 87"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="6"
            stroke="#76E3FE"
            d="M25 86.6958L38.6958 73"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="6"
            stroke="#76E3FE"
            d="M11 73L24.6958 86.6958"
          ></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 50 90"
          className={styles["largefemalesvg"]}
          height="90"
          width="50"
        >
          <circle
            strokeWidth="6"
            stroke="#F57CB3"
            r="22"
            cy="25"
            cx="25"
          ></circle>
          <path
            strokeLinecap="round"
            strokeWidth="6"
            stroke="#F57CB3"
            d="M25 47L25 87"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="6"
            stroke="#F57CB3"
            d="M12 73H38"
          ></path>
        </svg>
      </div>
      <form action="#">
        <p className={styles["heading"]}>What's your gender?</p>
        <div className={styles["radio-wrapper"]}>
          <input
            className={styles["gender-radio-buttons"]}
            id="male"
            value="male"
            name="gender"
            type="radio"
          />
          <label
            className={styles["genderlabel"] + styles["malebutton"]}
            for="male"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 50 90"
              className={styles["smallsvg"] + styles["malesmallsvg"]}
            >
              <circle
                strokeWidth="6"
                stroke="#76E3FE"
                r="22"
                cy="25"
                cx="25"
              ></circle>
              <path
                strokeLinecap="round"
                strokeWidth="6"
                stroke="#76E3FE"
                d="M25 47L25 87"
              ></path>
              <path
                strokeLinecap="round"
                strokeWidth="6"
                stroke="#76E3FE"
                d="M25 86.6958L38.6958 73"
              ></path>
              <path
                strokeLinecap="round"
                strokeWidth="6"
                stroke="#76E3FE"
                d="M11 73L24.6958 86.6958"
              ></path>
            </svg>
            Male
          </label>

          <input
            className={styles["gender-radio-buttons"]}
            id="female"
            value="female"
            name="gender"
            type="radio"
          />
          <label
            className={styles["genderlabel"] + styles["femalebutton"]}
            htmlFor="female"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 50 90"
              className={styles["smallsvg"]}
            >
              <circle
                strokeWidth="6"
                stroke="#F57CB3"
                r="22"
                cy="25"
                cx="25"
              ></circle>
              <path
                strokeLinecap="round"
                strokeWidth="6"
                stroke="#F57CB3"
                d="M25 47L25 87"
              ></path>
              <path
                strokeLinecap="round"
                strokeWidth="6"
                stroke="#F57CB3"
                d="M12 73H38"
              ></path>
            </svg>
            Female
          </label>

          <input
            className={styles["gender-radio-buttons"]}
            id="other"
            value="other"
            name="gender"
            type="radio"
          />
          <label
            className={styles["genderlabel"] + styles["otherbutton"]}
            htmlFor="other"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 78 75"
              className={styles["smallsvg"] + styles["other-gender"]}
            >
              <path
                strokeLinecap="round"
                strokeWidth="6"
                stroke="#9B4AED"
                d="M73.4657 16.6983L48.2159 16.6984L19.9816 58.0001L2.99911 58"
              ></path>
              <path
                strokeLinecap="round"
                strokeWidth="6"
                stroke="#9B4AED"
                d="M73.1641 16.698L59.4705 2.99992"
              ></path>
              <path
                strokeLinecap="round"
                strokeWidth="6"
                stroke="#9B4AED"
                d="M59.4648 30.696L73.1629 17.0024"
              ></path>
              <path
                strokeLinecap="round"
                strokeWidth="6"
                stroke="#9B4AED"
                d="M74.022 57.8121L51.1697 57.8121L19.9997 16.9999L3 17"
              ></path>
              <path
                strokeLinecap="round"
                strokeWidth="6"
                stroke="#9B4AED"
                d="M73.748 57.8123L61.3547 71.51"
              ></path>
              <path
                strokeLinecap="round"
                strokeWidth="6"
                stroke="#9B4AED"
                d="M61.3496 43.8147L73.747 57.5079"
              ></path>
            </svg>
            Other
          </label>
        </div>
      </form>
    </div>
  </div>
);

export default Card_live;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_live = () => (
         <div>
          <div className="gender-card">
  <div className="large-svg-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 50 90"
      className="largemalesvg"
      height="90"
      width="50"
    >
      <circle strokeWidth="6" stroke="#76E3FE" r="22" cy="25" cx="25"></circle>
      <path
        strokeLinecap="round"
        strokeWidth="6"
        stroke="#76E3FE"
        d="M25 47L25 87"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="6"
        stroke="#76E3FE"
        d="M25 86.6958L38.6958 73"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="6"
        stroke="#76E3FE"
        d="M11 73L24.6958 86.6958"
      ></path>
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 50 90"
      className="largefemalesvg"
      height="90"
      width="50"
    >
      <circle strokeWidth="6" stroke="#F57CB3" r="22" cy="25" cx="25"></circle>
      <path
        strokeLinecap="round"
        strokeWidth="6"
        stroke="#F57CB3"
        d="M25 47L25 87"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="6"
        stroke="#F57CB3"
        d="M12 73H38"
      ></path>
    </svg>
  </div>
  <form action="#">
    <p className="heading">What's your gender?</p>
    <div className="radio-wrapper">
      <input
        className="gender-radio-buttons"
        id="male"
        value="male"
        name="gender"
        type="radio"
      />
      <label className="genderlabel malebutton" for="male">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 50 90"
          className="smallsvg malesmallsvg"
        >
          <circle
            strokeWidth="6"
            stroke="#76E3FE"
            r="22"
            cy="25"
            cx="25"
          ></circle>
          <path
            strokeLinecap="round"
            strokeWidth="6"
            stroke="#76E3FE"
            d="M25 47L25 87"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="6"
            stroke="#76E3FE"
            d="M25 86.6958L38.6958 73"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="6"
            stroke="#76E3FE"
            d="M11 73L24.6958 86.6958"
          ></path></svg
        >Male
      </label>

      <input
        className="gender-radio-buttons"
        id="female"
        value="female"
        name="gender"
        type="radio"
      />
      <label className="genderlabel femalebutton" htmlFor="female">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 50 90"
          className="smallsvg"
        >
          <circle
            strokeWidth="6"
            stroke="#F57CB3"
            r="22"
            cy="25"
            cx="25"
          ></circle>
          <path
            strokeLinecap="round"
            strokeWidth="6"
            stroke="#F57CB3"
            d="M25 47L25 87"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="6"
            stroke="#F57CB3"
            d="M12 73H38"
          ></path></svg
        >Female
      </label>

      <input
        className="gender-radio-buttons"
        id="other"
        value="other"
        name="gender"
        type="radio"
      />
      <label className="genderlabel otherbutton" htmlFor="other">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 78 75"
          className="smallsvg other-gender"
        >
          <path
            strokeLinecap="round"
            strokeWidth="6"
            stroke="#9B4AED"
            d="M73.4657 16.6983L48.2159 16.6984L19.9816 58.0001L2.99911 58"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="6"
            stroke="#9B4AED"
            d="M73.1641 16.698L59.4705 2.99992"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="6"
            stroke="#9B4AED"
            d="M59.4648 30.696L73.1629 17.0024"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="6"
            stroke="#9B4AED"
            d="M74.022 57.8121L51.1697 57.8121L19.9997 16.9999L3 17"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="6"
            stroke="#9B4AED"
            d="M73.748 57.8123L61.3547 71.51"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="6"
            stroke="#9B4AED"
            d="M61.3496 43.8147L73.747 57.5079"
          ></path>
        </svg>

        Other
      </label>
    </div>
  </form>
</div>
        </div>
        );

        export default Card_live;
        
        
         */
}
