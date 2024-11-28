import React from "react";
import styles from "./Button_roar.module.css";

const Button_roar = () => (
  <div>
    <div className={styles["flip-button"]}>
      <button className={styles["button"] + styles["button-front"]}>
        <span className={styles["text-front"]}>Label one</span>
        <span className={styles["text-back"]}>Back can be longer</span>
      </button>
    </div>
  </div>
);

export default Button_roar;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_roar = () => (
         <div>
          <div className="flip-button">
  <button className="button button-front">
    <span className="text-front">Label one</span>
    <span className="text-back">Back can be longer</span>
  </button>
</div>
        </div>
        );

        export default Button_roar;
        
        
         */
}
