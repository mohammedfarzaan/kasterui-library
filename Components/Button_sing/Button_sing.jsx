import React from "react";
import styles from "./Button_sing.module.css";

const Button_sing = () => (
  <div>
    <div className={styles["container"]}>
      <input
        type="checkbox"
        id="send-checkbox"
        className={styles["send-checkbox"]}
      />
      <label for="send-checkbox" className={styles["button"]}>
        <div className={styles["send-message-icon"]}>
          <svg
            className={styles["icon-send"]}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 128 128"
            id="send"
          >
            <path
              stroke="#000000"
              stroke-width="7"
              d="M32.523 55.8837C25.7086 41.9768 22.3014 35.0233 23.9101 30.9241C24.8875 28.4336 26.8223 26.4385 29.2817 25.3851C33.3295 23.6514 40.3843 26.8436 54.4939 33.228L82.2307 45.7786C99.5721 53.6254 108.243 57.5488 108.243 64C108.243 70.4512 99.5721 74.3746 82.2307 82.2214L54.4938 94.772C40.3843 101.156 33.3295 104.349 29.2817 102.615C26.8223 101.561 24.8875 99.5664 23.9101 97.0759C22.3014 92.9767 25.7086 86.0232 32.523 72.1163V72.1163C34.0948 68.9087 34.8806 67.3049 35.1314 65.6137C35.2901 64.5437 35.2901 63.4563 35.1314 62.3863C34.8806 60.6951 34.0948 59.0913 32.523 55.8837V55.8837Z"
              className={styles["colorStroke000000"] + styles["svgStroke"]}
            ></path>
            <path
              stroke="#1c1c1c"
              stroke-linecap="round"
              stroke-width="7"
              d="M60 64H36"
              className={styles["colorStroke000000"] + styles["svgStroke"]}
            ></path>
          </svg>
        </div>
        <svg
          className={styles["icon-check"]}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="check"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path
            d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"
            fill="#000000"
            className={styles["color000000"] + styles["svgShape"]}
          ></path>
        </svg>
        <span className={styles["button-text"]}>Send Message</span>
        <span className={styles["button-text"] + styles["sending"]}></span>
        <span className={styles["button-text"] + styles["sent"]}>Sent</span>
      </label>
    </div>
  </div>
);

export default Button_sing;
