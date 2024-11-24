import React from "react";
import styles from "./Button_using.module.css";

const Button_using = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["button-overlay"]}></div>
      <span>
        Button{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 53 58"
          height="58"
          width="53"
        >
          <path
            stroke-width="9"
            stroke="currentColor"
            d="M44.25 36.3612L17.25 51.9497C11.5833 55.2213 4.5 51.1318 4.50001 44.5885L4.50001 13.4115C4.50001 6.86824 11.5833 2.77868 17.25 6.05033L44.25 21.6388C49.9167 24.9104 49.9167 33.0896 44.25 36.3612Z"
          ></path>
        </svg>
      </span>
    </button>
  </div>
);

export default Button_using;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_using = () => (
         <div>
          <button className="button">
  <div className="button-overlay"></div>
  <span>Button <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 53 58" height="58" width="53">
<path stroke-width="9" stroke="currentColor" d="M44.25 36.3612L17.25 51.9497C11.5833 55.2213 4.5 51.1318 4.50001 44.5885L4.50001 13.4115C4.50001 6.86824 11.5833 2.77868 17.25 6.05033L44.25 21.6388C49.9167 24.9104 49.9167 33.0896 44.25 36.3612Z"></path>
</svg></span>
  
</button>
        </div>
        );

        export default Button_using;
        
        
         */
}
