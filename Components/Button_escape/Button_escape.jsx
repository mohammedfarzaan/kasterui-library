import React from "react";
import styles from "./Button_escape.module.css";

const Button_escape = () => (
  <div>
    <button className={styles["button"]}>join now</button>
  </div>
);

export default Button_escape;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_escape = () => (
         <div>
          <button className="button">join now</button>
        </div>
        );

        export default Button_escape;
        
        
         */
}
