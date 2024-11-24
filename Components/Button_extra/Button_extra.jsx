import React from "react";
import styles from "./Button_extra.module.css";

const Button_extra = () => (
  <div>
    <button className={styles["button"]}>join now</button>
  </div>
);

export default Button_extra;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_extra = () => (
         <div>
          <button className="button">join now</button>
        </div>
        );

        export default Button_extra;
        
        
         */
}
