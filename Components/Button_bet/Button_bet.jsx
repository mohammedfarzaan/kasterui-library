import React from "react";
import styles from "./Button_bet.module.css";

const Button_bet = () => (
  <div>
    <button className={styles["btn"]}>3D button</button>
  </div>
);

export default Button_bet;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_bet = () => (
         <div>
          <button className="btn">3D button</button>
        </div>
        );

        export default Button_bet;
        
        
         */
}
