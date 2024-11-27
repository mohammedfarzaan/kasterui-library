import React from "react";
import styles from "./Button_fat.module.css";

const Button_fat = () => (
  <div>
    <button className={styles["btn"]}>Watch</button>
  </div>
);

export default Button_fat;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_fat = () => (
         <div>
          <button className="btn">
  Watch
</button>
        </div>
        );

        export default Button_fat;
        
        
         */
}
