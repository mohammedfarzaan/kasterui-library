import React from "react";
import styles from "./Button_dig.module.css";

const Button_dig = () => (
  <div>
    <div className={styles["arrow"]}>
      <div className={styles["arrow-top"]}></div>
      <div className={styles["arrow-bottom"]}></div>
    </div>
  </div>
);

export default Button_dig;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_dig = () => (
         <div>
          <div className="arrow">
  <div className="arrow-top"></div>
  <div className="arrow-bottom"></div>
</div>
        </div>
        );

        export default Button_dig;
        
        
         */
}
