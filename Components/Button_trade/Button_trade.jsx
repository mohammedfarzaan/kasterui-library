import React from "react";
import styles from "./Button_trade.module.css";

const Button_trade = () => (
  <div>
    <button className={styles["btn"]}>space</button>
  </div>
);

export default Button_trade;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_trade = () => (
         <div>
          <button className="btn">
  space
</button>
        </div>
        );

        export default Button_trade;
        
        
         */
}
