import React from "react";
import styles from "./Button_saw.module.css";

const Button_saw = () => (
  <div>
    <button>
      <div className={styles["text"]}>
        <span>Back</span>
        <span>to</span>
        <span>top</span>
      </div>
      <div className={styles["clone"]}>
        <span>Back</span>
        <span>to</span>
        <span>top</span>
      </div>
      <svg
        width="20px"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["h-6"] + styles["w-6"]}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_saw;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_saw = () => (
         <div>
          <button>
    <div className="text">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
    </div>
    <div className="clone">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
    </div>
    <svg width="20px" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
</button>
        </div>
        );

        export default Button_saw;
        
        
         */
}
