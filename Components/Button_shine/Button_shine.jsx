import React from "react";
import styles from "./Button_shine.module.css";

const Button_shine = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["text"]}>HOVER ME</span>
      <div className={styles["wave"]}></div>
    </button>
  </div>
);

export default Button_shine;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_shine = () => (
         <div>
          <button className="button">
    <span className="text">HOVER ME</span>
    <div className="wave"></div>
</button>
        </div>
        );

        export default Button_shine;
        
        
         */
}
