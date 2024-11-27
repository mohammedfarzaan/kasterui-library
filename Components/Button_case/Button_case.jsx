import React from "react";
import styles from "./Button_case.module.css";

const Button_case = () => (
  <div>
    <div className={styles["button-container"]}>
      <button className={styles["styled-button"]}>
        Join Today <span className={styles["arrow"]}>→</span>
      </button>
    </div>
  </div>
);

export default Button_case;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_case = () => (
         <div>
          <div className="button-container">
  <button className="styled-button">Join Today <span className="arrow">→</span></button>
</div>
        </div>
        );

        export default Button_case;
        
        
         */
}
