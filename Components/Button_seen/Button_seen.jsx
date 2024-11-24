import React from "react";
import styles from "./Button_seen.module.css";

const Button_seen = () => (
  <div>
    <button className={styles["Btn"]}>Click Me</button>
  </div>
);

export default Button_seen;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_seen = () => (
         <div>
          <button className="Btn">Click Me</button>
        </div>
        );

        export default Button_seen;
        
        
         */
}
