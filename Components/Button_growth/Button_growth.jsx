import React from "react";
import styles from "./Button_growth.module.css";

const Button_growth = () => (
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
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_growth;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_growth = () => (
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
    <svg width="20px" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
</button>
        </div>
        );

        export default Button_growth;
        
        
         */
}
