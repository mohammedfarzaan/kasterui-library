import React from "react";
import styles from "./Button_bring.module.css";

const Button_bring = () => (
  <div>
    <button type="button" className={styles["button"]}>
      <div className={styles["button-top"]}>3D Button</div>
      <div className={styles["button-bottom"]}></div>
      <div className={styles["button-base"]}></div>
    </button>
  </div>
);

export default Button_bring;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_bring = () => (
         <div>
          <button type="button" className="button">
  <div className="button-top">3D Button</div>
  <div className="button-bottom"></div>
  <div className="button-base"></div>
</button>
        </div>
        );

        export default Button_bring;
        
        
         */
}
