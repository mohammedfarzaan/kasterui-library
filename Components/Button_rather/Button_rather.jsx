import React from "react";
import styles from "./Button_rather.module.css";

const Button_rather = () => (
  <div>
    <div className={styles["flip-button"]}>
      <button className={styles["button"] + styles["button-front"]}>
        <span className={styles["text-front"]}>Label one</span>
        <span className={styles["text-back"]}>Back can be longer</span>
      </button>
    </div>
  </div>
);

export default Button_rather;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_rather = () => (
         <div>
          <div className="flip-button">
  <button className="button button-front">
    <span className="text-front">Label one</span>
    <span className="text-back">Back can be longer</span>
  </button>
</div>
        </div>
        );

        export default Button_rather;
        
        
         */
}
