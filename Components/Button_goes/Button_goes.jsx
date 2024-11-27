import React from "react";
import styles from "./Button_goes.module.css";

const Button_goes = () => (
  <div>
    <button className={styles["game-button"]}>Play Now!</button>
  </div>
);

export default Button_goes;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_goes = () => (
         <div>
          <button className="game-button">Play Now!</button>
        </div>
        );

        export default Button_goes;
        
        
         */
}
