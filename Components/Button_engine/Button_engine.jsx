import React from "react";
import styles from "./Button_engine.module.css";

const Button_engine = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        className="size-6"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
      <span>Send Message</span>
    </button>
  </div>
);

export default Button_engine;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_engine = () => (
         <div>
          <button className="button">
  <svg
    className="size-6"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
  </svg>
  <span>Send Message</span>
</button>
        </div>
        );

        export default Button_engine;
        
        
         */
}
