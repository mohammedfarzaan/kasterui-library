import React from "react";
import styles from "./Loader_rise.module.css";

const Loader_rise = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["plate"]}>
        <div className={styles["black"]}>
          <div className={styles["border"]}>
            <div className={styles["white"]}>
              <div className={styles["center"]}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["player"]}>
        <div className={styles["rect"]}></div>
        <div className={styles["circ"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_rise;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_rise = () => (
         <div>
          <div className="container">
    <div className="plate">
        <div className="black">
            <div className="border">
                <div className="white">
                    <div className="center"></div>
                </div>
            </div>
        </div>
    </div>

    <div className="player">
        <div className="rect"></div>
        <div className="circ"></div>
    </div>
</div>
        </div>
        );

        export default Loader_rise;
        
        
         */
}
