import React from "react";
import styles from "./Loader_load.module.css";

const Loader_load = () => (
  <div>
    <div className={styles["holder"]}>
      <div className={styles["candle"]}>
        <div className={styles["blinking-glow"]}></div>
        <div className={styles["thread"]}></div>
        <div className={styles["glow"]}></div>
        <div className={styles["flame"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_load;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_load = () => (
         <div>
          <div className="holder">
        <div className="candle">
          <div className="blinking-glow"></div>
          <div className="thread"></div>
          <div className="glow"></div>
          <div className="flame"></div>
        </div>
    </div>
        </div>
        );

        export default Loader_load;
        
        
         */
}
