import React from "react";
import styles from "./Button_put.module.css";

const Button_put = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        viewBox="0 0 24 24"
        height="48"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
        className="send-icon"
      >
        <path
          d="m16.066 10.184l-3.89-1.795c-2.154-.994-3.231-1.491-3.725-.982c-.493.509.038 1.572 1.101 3.698c.22.44.33.659.33.895s-.11.456-.33.895c-1.063 2.126-1.594 3.19-1.1 3.698c.493.51 1.57.012 3.725-.982l3.889-1.795c1.698-.784 2.548-1.176 2.548-1.816c0-.64-.85-1.032-2.549-1.816"
          fill-opacity="0.4"
          fill="currentColor"
        ></path>
        <path
          d="M8.895 11.684L8.174 9.52a1 1 0 0 0-.707-.654l-1.78-.445a.8.8 0 0 0-.91 1.134l1.111 2.22a.5.5 0 0 1 0 .448l-1.11 2.22a.8.8 0 0 0 .91 1.134l1.78-.445a1 1 0 0 0 .706-.654l.72-2.163a1 1 0 0 0 0-.632"
          fill="currentColor"
        ></path>
      </svg>
      Send Message
    </button>
  </div>
);

export default Button_put;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_put = () => (
         <div>
          <button className="button">
  <svg
    viewBox="0 0 24 24"
    height="48"
    width="48"
    xmlns="http://www.w3.org/2000/svg"
    className="send-icon"
  >
    <path
      d="m16.066 10.184l-3.89-1.795c-2.154-.994-3.231-1.491-3.725-.982c-.493.509.038 1.572 1.101 3.698c.22.44.33.659.33.895s-.11.456-.33.895c-1.063 2.126-1.594 3.19-1.1 3.698c.493.51 1.57.012 3.725-.982l3.889-1.795c1.698-.784 2.548-1.176 2.548-1.816c0-.64-.85-1.032-2.549-1.816"
      fill-opacity="0.4"
      fill="currentColor"
    ></path>
    <path
      d="M8.895 11.684L8.174 9.52a1 1 0 0 0-.707-.654l-1.78-.445a.8.8 0 0 0-.91 1.134l1.111 2.22a.5.5 0 0 1 0 .448l-1.11 2.22a.8.8 0 0 0 .91 1.134l1.78-.445a1 1 0 0 0 .706-.654l.72-2.163a1 1 0 0 0 0-.632"
      fill="currentColor"
    ></path>
  </svg>
  Send Message
</button>
        </div>
        );

        export default Button_put;
        
        
         */
}
