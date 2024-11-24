import React from "react";
import styles from "./Button_flew.module.css";

const Button_flew = () => (
  <div>
    <div className={styles["container"]}>
      <button className={styles["join-now-button"]}>Join now</button>
    </div>
  </div>
);

export default Button_flew;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_flew = () => (
         <div>
          <div className="container">
  <button className="join-now-button">Join now</button>
</div>
        </div>
        );

        export default Button_flew;
        
        
         */
}
