import React from "react";
import styles from "./Button_voyage.module.css";

const Button_voyage = () => (
  <div>
    <button className={styles["open-file"]}>
      <span className={styles["file-wrapper"]}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 71 67">
          <path
            stroke-width="5"
            stroke="black"
            d="M41.7322 11.7678L42.4645 12.5H43.5H68.5V64.5H2.5V2.5H32.4645L41.7322 11.7678Z"
          ></path>
        </svg>
        <span className={styles["file-front"]}></span>
      </span>
      Open file
    </button>
  </div>
);

export default Button_voyage;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_voyage = () => (
         <div>
          <button className="open-file">
  <span className="file-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 71 67">
      <path
        stroke-width="5"
        stroke="black"
        d="M41.7322 11.7678L42.4645 12.5H43.5H68.5V64.5H2.5V2.5H32.4645L41.7322 11.7678Z"
      ></path>
    </svg>
    <span className="file-front"></span>
  </span>
  Open file
</button>
        </div>
        );

        export default Button_voyage;
        
        
         */
}
