import React from "react";
import styles from "./Button_magnet.module.css";

const Button_magnet = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["text-button"]}>Get pro now</span>
    </button>
  </div>
);

export default Button_magnet;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_magnet = () => (
         <div>
          <button className="button">
  <span className="text-button">Get pro now</span>
</button>
        </div>
        );

        export default Button_magnet;
        
        
         */
}
