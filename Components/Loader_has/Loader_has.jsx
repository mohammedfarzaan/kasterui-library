import React from "react";
import styles from "./Loader_has.module.css";

const Loader_has = () => (
  <div>
    <div className={styles["main"]}>
      <div className={styles["dog"]}>
        <div className={styles["dog__paws"]}>
          <div className={styles["dog__bl-leg"] + styles["leg"]}>
            <div className={styles["dog__bl-paw"] + styles["paw"]}></div>
            <div className={styles["dog__bl-top"] + styles["top"]}></div>
          </div>
          <div className={styles["dog__fl-leg"] + styles["leg"]}>
            <div className={styles["dog__fl-paw"] + styles["paw"]}></div>
            <div className={styles["dog__fl-top"] + styles["top"]}></div>
          </div>
          <div className={styles["dog__fr-leg"] + styles["leg"]}>
            <div className={styles["dog__fr-paw"] + styles["paw"]}></div>
            <div className={styles["dog__fr-top"] + styles["top"]}></div>
          </div>
        </div>

        <div className={styles["dog__body"]}>
          <div className={styles["dog__tail"]}></div>
        </div>

        <div className={styles["dog__head"]}>
          <div className={styles["dog__snout"]}>
            <div className={styles["dog__nose"]}></div>
            <div className={styles["dog__eyes"]}>
              <div className={styles["dog__eye-l"]}></div>
              <div className={styles["dog__eye-r"]}></div>
            </div>
          </div>
        </div>

        <div className={styles["dog__head-c"]}>
          <div className={styles["dog__ear-l"]}></div>
          <div className={styles["dog__ear-r"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_has;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_has = () => (
         <div>
          <div className="main">
  <div className="dog">
    <div className="dog__paws">
      <div className="dog__bl-leg leg">
        <div className="dog__bl-paw paw"></div>
        <div className="dog__bl-top top"></div>
      </div>
      <div className="dog__fl-leg leg">
        <div className="dog__fl-paw paw"></div>
        <div className="dog__fl-top top"></div>
      </div>
      <div className="dog__fr-leg leg">
        <div className="dog__fr-paw paw"></div>
        <div className="dog__fr-top top"></div>
      </div>
    </div>

    <div className="dog__body">
      <div className="dog__tail"></div>
    </div>

    <div className="dog__head">
      <div className="dog__snout">
        <div className="dog__nose"></div>
        <div className="dog__eyes">
          <div className="dog__eye-l"></div>
          <div className="dog__eye-r"></div>
        </div>
      </div>
    </div>

    <div className="dog__head-c">
      <div className="dog__ear-l"></div>
      <div className="dog__ear-r"></div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_has;
        
        
         */
}
