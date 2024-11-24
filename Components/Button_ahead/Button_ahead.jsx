import React from "react";
import styles from "./Button_ahead.module.css";

const Button_ahead = () => (
  <div>
    <button data-label="Register" className={styles["rainbow-hover"]}>
      <span className={styles["sp"]}>Register</span>
    </button>
  </div>
);

export default Button_ahead;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_ahead = () => (
         <div>
          <button data-label="Register" className="rainbow-hover">
  <span className="sp">Register</span>
</button>
        </div>
        );

        export default Button_ahead;
        
        
         */
}
