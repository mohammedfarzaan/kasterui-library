import React from "react";
import styles from "./Button_lot.module.css";

const Button_lot = () => (
  <div>
    <button className={styles["button"]}>ㅤ JOIN NOW</button>
  </div>
);

export default Button_lot;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_lot = () => (
         <div>
          <button className="button">
 ㅤ JOIN NOW
</button>
        </div>
        );

        export default Button_lot;
        
        
         */
}
