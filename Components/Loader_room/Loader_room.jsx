import React from "react";
import styles from "./Loader_room.module.css";

const Loader_room = () => (
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

export default Loader_room;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_room = () => (
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

        export default Loader_room;
        
        
         */
}
