import React from "react";
import styles from "./Button_pure.module.css";

const Button_pure = () => (
  <div>
    <div className={styles["container"]}>
      <button className={styles["join-now-button"]}>Join now</button>
    </div>
  </div>
);

export default Button_pure;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_pure = () => (
         <div>
          <div className="container">
  <button className="join-now-button">Join now</button>
</div>
        </div>
        );

        export default Button_pure;
        
        
         */
}
