import React from "react";
import styles from "./Loader_plenty.module.css";

const Loader_plenty = () => (
  <div>
    <div className={styles["container"] + styles["center"]}>
      <div className={styles["rope"] + styles["center"]}>
        <div className={styles["legs"] + styles["center"]}>
          <div className={styles["boot-l"]}></div>
          <div className={styles["boot-r"]}></div>
        </div>
        <div className={styles["costume"] + styles["center"]}>
          <div className={styles["spider"]}>
            <div className={styles["s1"] + styles["center"]}></div>
            <div className={styles["s2"] + styles["center"]}></div>
            <div className={styles["s3"]}></div>
            <div className={styles["s4"]}></div>
          </div>
          <div className={styles["belt"] + styles["center"]}></div>
          <div className={styles["hand-r"]}></div>
          <div className={styles["hand-l"]}></div>
          <div className={styles["neck"] + styles["center"]}></div>
          <div className={styles["mask"] + styles["center"]}>
            <div className={styles["eye-l"]}></div>
            <div className={styles["eye-r"]}></div>
          </div>
          <div className={styles["cover"] + styles["center"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_plenty;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_plenty = () => (
         <div>
          <div className="container center">
  <div className="rope center">
    <div className="legs center">
      <div className="boot-l"></div>
      <div className="boot-r"></div>
    </div>
    <div className="costume center">
      <div className="spider">
        <div className="s1 center"></div>
        <div className="s2 center"></div>
        <div className="s3"></div>
        <div className="s4"></div>
      </div>
      <div className="belt center"></div>
      <div className="hand-r"></div>
      <div className="hand-l"></div>
      <div className="neck center"></div>
      <div className="mask center">
        <div className="eye-l"></div>
        <div className="eye-r"></div>
      </div>
      <div className="cover center"></div>
    </div>
</div></div>
        </div>
        );

        export default Loader_plenty;
        
        
         */
}
