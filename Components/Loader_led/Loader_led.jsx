import React from "react";
import styles from "./Loader_led.module.css";

const Loader_led = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["circle"]} tabindex="0"></div>
      <div className={styles["circle"]} tabindex="0"></div>
      <div className={styles["circle"]} tabindex="0"></div>
      <div className={styles["circle"]} tabindex="0"></div>
      <div className={styles["circle"]} tabindex="0"></div>
    </div>
  </div>
);

export default Loader_led;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_led = () => (
         <div>
          <div className="loader">
  <div className="circle" tabindex="0"></div>
  <div className="circle" tabindex="0"></div>
  <div className="circle" tabindex="0"></div>
  <div className="circle" tabindex="0"></div>
  <div className="circle" tabindex="0"></div>
</div>
        </div>
        );

        export default Loader_led;
        
        
         */
}
