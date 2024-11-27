import React from "react";
import styles from "./Button_keep.module.css";

const Button_keep = () => (
  <div>
    <button className={styles["button"]}>Hover</button>
  </div>
);

export default Button_keep;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_keep = () => (
         <div>
          <button className="button">Hover</button>
        </div>
        );

        export default Button_keep;
        
        
         */
}
