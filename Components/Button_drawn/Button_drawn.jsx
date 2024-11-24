import React from "react";
import styles from "./Button_drawn.module.css";

const Button_drawn = () => (
  <div>
    <button className={styles["btn"]}>PLAY</button>
  </div>
);

export default Button_drawn;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_drawn = () => (
         <div>
          <button className="btn">
  PLAY
</button>
        </div>
        );

        export default Button_drawn;
        
        
         */
}
