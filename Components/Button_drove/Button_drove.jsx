import React from "react";
import styles from "./Button_drove.module.css";

const Button_drove = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        className={styles["size-6"]}
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

export default Button_drove;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_drove = () => (
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

        export default Button_drove;
        
        
         */
}
