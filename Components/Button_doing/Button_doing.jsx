import React from "react";
import styles from "./Button_doing.module.css";

const Button_doing = () => (
  <div>
    <button className={styles["btn"]}>Diagonal Swipe</button>
  </div>
);

export default Button_doing;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_doing = () => (
         <div>
          <button className="btn">
  Diagonal Swipe
</button>
        </div>
        );

        export default Button_doing;
        
        
         */
}
