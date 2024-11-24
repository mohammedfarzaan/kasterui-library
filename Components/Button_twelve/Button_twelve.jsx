import React from "react";
import styles from "./Button_twelve.module.css";

const Button_twelve = () => (
  <div>
    <div className={styles["scrolldown"]} style="--color: skyblue">
      <div className={styles["chevrons"]}>
        <div className={styles["chevrondown"]}></div>
        <div className={styles["chevrondown"]}></div>
      </div>
    </div>
  </div>
);

export default Button_twelve;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_twelve = () => (
         <div>
          <div className="scrolldown" style="--color: skyblue">
    <div className="chevrons">
        <div className="chevrondown"></div>
        <div className="chevrondown"></div>
    </div>
</div>
        </div>
        );

        export default Button_twelve;
        
        
         */
}
