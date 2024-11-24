import React from "react";
import styles from "./Button_slowly.module.css";

const Button_slowly = () => (
  <div>
    <input
      type="checkbox"
      id="send-checkbox"
      className={styles["send-checkbox"]}
    />
    <label for="send-checkbox" className={styles["send-button"]}>
      <svg
        className={styles["svg-style"]}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        height="20px"
        width="20px"
      >
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="1.5"
          stroke="#292D32"
          d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"
        ></path>
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="1.5"
          stroke="#292D32"
          d="M10.11 13.6501L13.69 10.0601"
        ></path>
      </svg>
      <span className={styles["message"]}>Send Message</span>
      <span className={styles["message-sent"]}>Message Sent</span>
    </label>
  </div>
);

export default Button_slowly;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_slowly = () => (
         <div>
          <input type="checkbox" id="send-checkbox" className="send-checkbox" />
<label for="send-checkbox" className="send-button">
  <svg
    className="svg-style"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height="20px"
    width="20px"
  >
    <path
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="1.5"
      stroke="#292D32"
      d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"
    ></path>
    <path
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="1.5"
      stroke="#292D32"
      d="M10.11 13.6501L13.69 10.0601"
    ></path>
  </svg>
  <span className="message">Send Message</span>
  <span className="message-sent">Message Sent</span>
</label>
        </div>
        );

        export default Button_slowly;
        
        
         */
}