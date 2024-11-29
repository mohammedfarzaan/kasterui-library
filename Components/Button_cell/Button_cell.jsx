import React from "react";
import styles from "./Button_cell.module.css";

const Button_cell = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        className={styles["w-6"] + styles["h-6"]}
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
      <span className={styles["text"]}>Button</span>
    </button>
  </div>
);

export default Button_cell;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_cell = () => (
         <div>
          <button className="button">
  <svg className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" strokeLinejoin="round" strokeLinecap="round"></path>
  </svg>
  <span className="text">
    Button
  </span>
</button>
        </div>
        );

        export default Button_cell;
        
        
         */
}
