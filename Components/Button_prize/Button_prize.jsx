import React from "react";
import styles from "./Button_prize.module.css";

const Button_prize = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        className="w-6 h-6"
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

export default Button_prize;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_prize = () => (
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

        export default Button_prize;
        
        
         */
}
