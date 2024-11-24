import React from "react";
import styles from "./Button_out.module.css";

const Button_out = () => (
  <div>
    <div className={styles["container"]}>
      <button className={styles["button"]}>
        <p>PREMIUM</p>
      </button>
    </div>
  </div>
);

export default Button_out;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_out = () => (
         <div>
          <div className="container">
  <button className="button">
    <p>PREMIUM</p>
  </button>
</div>
        </div>
        );

        export default Button_out;
        
        
         */
}
