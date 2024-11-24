import React from "react";
import styles from "./Button_gray.module.css";

const Button_gray = () => (
  <div>
    <button className={styles["button"]}>
      <span>Explore </span>
    </button>
  </div>
);

export default Button_gray;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_gray = () => (
         <div>
          <button className="button">
  <span>Explore </span>
</button>
        </div>
        );

        export default Button_gray;
        
        
         */
}
