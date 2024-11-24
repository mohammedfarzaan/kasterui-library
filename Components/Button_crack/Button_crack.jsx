import React from "react";
import styles from "./Button_crack.module.css";

const Button_crack = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className={styles["w-6"] + styles["h-6"]}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        ></path>
      </svg>

      <div className={styles["text"]}>Button</div>
    </button>
  </div>
);

export default Button_crack;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_crack = () => (
         <div>
          <button className="button">

  
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
  </svg>

  
  <div className="text">
    Button
  </div>

</button>
        </div>
        );

        export default Button_crack;
        
        
         */
}
