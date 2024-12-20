import React from "react";
import styles from "./Button_off.module.css";

const Button_off = () => (
  <div>
    <div className={styles["container"]}>
      <button className={styles["button"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className={styles["icon"]}
        >
          <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#000000"
              d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
            ></path>
            <path
              fill="#000000"
              d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
            ></path>
          </g>
        </svg>
        <p className={styles["text"]}>
          <span style="transition-duration: 100ms">S</span>
          <span style="transition-duration: 150ms">e</span>
          <span style="transition-duration: 200ms">n</span>
          <span style="transition-duration: 250ms">d</span>
          <span className={styles["tab"]}></span>
          <span style="transition-duration: 350ms">M</span>
          <span style="transition-duration: 400ms">e</span>
          <span style="transition-duration: 450ms">s</span>
          <span style="transition-duration: 500ms">s</span>
          <span style="transition-duration: 550ms">a</span>
          <span style="transition-duration: 600ms">g</span>
          <span style="transition-duration: 650ms">e</span>
        </p>
      </button>
    </div>
  </div>
);

export default Button_off;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_off = () => (
         <div>
          <div className="container">
  <button className="button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="icon"
    >
      <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
      <g
        strokeLinejoin="round"
        strokeLinecap="round"
        id="SVGRepo_tracerCarrier"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="#000000"
          d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
        ></path>
        <path
          fill="#000000"
          d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
        ></path>
      </g>
    </svg>
    <p className="text">
      <span style="transition-duration: 100ms">S</span>
      <span style="transition-duration: 150ms">e</span>
      <span style="transition-duration: 200ms">n</span>
      <span style="transition-duration: 250ms">d</span>
      <span className="tab"></span>
      <span style="transition-duration: 350ms">M</span>
      <span style="transition-duration: 400ms">e</span>
      <span style="transition-duration: 450ms">s</span>
      <span style="transition-duration: 500ms">s</span>
      <span style="transition-duration: 550ms">a</span>
      <span style="transition-duration: 600ms">g</span>
      <span style="transition-duration: 650ms">e</span>
    </p>
  </button>
</div>
        </div>
        );

        export default Button_off;
        
        
         */
}
