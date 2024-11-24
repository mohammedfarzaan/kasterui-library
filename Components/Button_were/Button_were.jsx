import React from "react";
import styles from "./Button_were.module.css";

const Button_were = () => (
  <div>
    <button className={styles["button"]}>Minecraft</button>
  </div>
);

export default Button_were;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_were = () => (
         <div>
          <button className="button">Minecraft</button>
        </div>
        );

        export default Button_were;
        
        
         */
}
