import React from "react";
import styles from "./Button_lunch.module.css";

const Button_lunch = () => (
  <div>
    <button className={styles["button"]}>Hover me !</button>
  </div>
);

export default Button_lunch;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_lunch = () => (
         <div>
          <button className="button">
  Hover me !
</button>
        </div>
        );

        export default Button_lunch;
        
        
         */
}
