import React from "react";
import styles from "./Button_path.module.css";

const Button_path = () => (
  <div>
    <button className={styles["button"]}>CLICK ME</button>
  </div>
);

export default Button_path;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_path = () => (
         <div>
          <button className="button">
  CLICK ME
</button>
        </div>
        );

        export default Button_path;
        
        
         */
}
