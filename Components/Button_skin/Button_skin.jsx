import React from "react";
import styles from "./Button_skin.module.css";

const Button_skin = () => (
  <div>
    <button className={styles["button"]}>Button</button>
  </div>
);

export default Button_skin;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_skin = () => (
         <div>
          <button className="button">Button</button>
        </div>
        );

        export default Button_skin;
        
        
         */
}
