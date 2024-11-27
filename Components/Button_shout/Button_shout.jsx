import React from "react";
import styles from "./Button_shout.module.css";

const Button_shout = () => (
  <div>
    <button className={styles["neo-pop-tilted-button"]}>
      <span>Play Now</span>
    </button>
  </div>
);

export default Button_shout;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_shout = () => (
         <div>
          <button className="neo-pop-tilted-button">
  <span>Play Now</span>
</button>
        </div>
        );

        export default Button_shout;
        
        
         */
}
