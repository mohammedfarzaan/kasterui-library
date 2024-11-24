import React from "react";
import styles from "./Button_refer.module.css";

const Button_refer = () => (
  <div>
    <div className={styles["nav_bar"]}>
      <div className={styles["bar1"]}></div>
      <div className={styles["bar2"]}></div>
      <div className={styles["bar3_h"]}></div>
      <div className={styles["bar4"]}></div>
    </div>
  </div>
);

export default Button_refer;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_refer = () => (
         <div>
          <div className="nav_bar">
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3_h"></div>
  <div className="bar4"></div>
</div>
        </div>
        );

        export default Button_refer;
        
        
         */
}
