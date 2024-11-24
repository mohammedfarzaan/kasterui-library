import React from "react";
import styles from "./Button_minute.module.css";

const Button_minute = () => (
  <div>
    <button className={styles["button"]}>Buton</button>
  </div>
);

export default Button_minute;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_minute = () => (
         <div>
          <button className="button">Buton</button>
        </div>
        );

        export default Button_minute;
        
        
         */
}
