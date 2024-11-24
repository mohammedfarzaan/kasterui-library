import React from "react";
import styles from "./Button_mean.module.css";

const Button_mean = () => (
  <div>
    <div tabindex="0" className={styles["signInButton"]}>
      <p className={styles["signInButtonText"]}>Sign In</p>
    </div>
  </div>
);

export default Button_mean;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_mean = () => (
         <div>
          <div tabindex="0" className="signInButton">
  <p className="signInButtonText">Sign In</p>
</div>
        </div>
        );

        export default Button_mean;
        
        
         */
}