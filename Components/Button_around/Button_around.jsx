import React from "react";
import styles from "./Button_around.module.css";

const Button_around = () => (
  <div>
    <button className={styles["button"]}>Hover Me!</button>
  </div>
);

export default Button_around;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_around = () => (
         <div>
          <button className="button">
  Hover Me!
</button>
        </div>
        );

        export default Button_around;
        
        
         */
}
