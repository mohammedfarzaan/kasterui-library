import React from "react";
import styles from "./Button_plant.module.css";

const Button_plant = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["button_lg"]}>
        <span className={styles["button_sl"]}></span>
        <span className={styles["button_text"]}>Download Now</span>
      </span>
    </button>
  </div>
);

export default Button_plant;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_plant = () => (
         <div>
          <button className="button">
    <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text">Download Now</span>
    </span>
</button>
        </div>
        );

        export default Button_plant;
        
        
         */
}
