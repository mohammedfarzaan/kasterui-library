import React from "react";
import styles from "./Button_move.module.css";

const Button_move = () => (
  <div>
    <button className={styles["gradient-button"]}>⚡ Join now</button>
  </div>
);

export default Button_move;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_move = () => (
         <div>
          <button className="gradient-button">⚡ Join now</button>
        </div>
        );

        export default Button_move;
        
        
         */
}
