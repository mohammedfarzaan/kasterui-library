import React from "react";
import styles from "./Button_slope.module.css";

const Button_slope = () => (
  <div>
    <button className={styles["Btn"]}>Join now</button>
  </div>
);

export default Button_slope;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_slope = () => (
         <div>
          <button className="Btn">
  Join now
</button>
        </div>
        );

        export default Button_slope;
        
        
         */
}
