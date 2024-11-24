import React from "react";
import styles from "./Button_straw.module.css";

const Button_straw = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["ellipse"]}>
        <span className={styles["icon"]}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
          </svg>
        </span>
        <span className={styles["text1"]}> Send message </span>
        <span className={styles["text2"]}> Send </span>
      </div>
    </button>
  </div>
);

export default Button_straw;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_straw = () => (
         <div>
          <button className="button">
  <div className="ellipse">
    <span className="icon"
      ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
        ></path></svg
    ></span>
    <span className="text1"> Send message </span>
    <span className="text2"> Send </span>
  </div>
</button>
        </div>
        );

        export default Button_straw;
        
        
         */
}
