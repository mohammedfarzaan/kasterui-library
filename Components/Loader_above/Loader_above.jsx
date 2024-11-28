import React from "react";
import styles from "./Loader_above.module.css";

const Loader_above = () => (
  <div>
    <div id="div1">
      <div id="l" style="margin: 33px">
        <div className={styles["pupil"]}>
          <div className={styles["p5"]}>
            <div className={styles["pupl2"]}>
              <div className={styles["pupil3"]}></div>
              <div className={styles["pupil4"]}></div>
            </div>
          </div>
        </div>
      </div>
      <div id="m" style="margin: 33px">
        <div className={styles["pupil"]}>
          <div className={styles["p5"]}>
            <div className={styles["pupl2"]}>
              <div className={styles["pupil3"]}></div>
              <div className={styles["pupil4"]}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_above;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_above = () => (
         <div>
          <div id="div1">
  <div id="l" style="margin: 33px">
    <div className="pupil">
      <div className="p5">
        <div className="pupl2">
          <div className="pupil3"></div>
          <div className="pupil4"></div>
        </div>
      </div>
    </div>
  </div>
  <div id="m" style="margin: 33px">
    <div className="pupil">
      <div className="p5">
        <div className="pupl2">
          <div className="pupil3"></div>
          <div className="pupil4"></div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_above;
        
        
         */
}
