import React from "react";
import styles from "./Button_motion.module.css";

const Button_motion = () => (
  <div>
    <button className={styles["button"]}>Let`s go →</button>
  </div>
);

export default Button_motion;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_motion = () => (
         <div>
          <button className="button">
  Let`s go →
</button>
        </div>
        );

        export default Button_motion;
        
        
         */
}
