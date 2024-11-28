import React from "react";
import styles from "./Loader_nest.module.css";

const Loader_nest = () => (
  <div>
    <div className={styles["triangles"]}>
      <div className={styles["tri"] + styles["invert"]}></div>
      <div className={styles["tri"] + styles["invert"]}></div>
      <div className={styles["tri"]}></div>
      <div className={styles["tri"] + styles["invert"]}></div>
      <div className={styles["tri"] + styles["invert"]}></div>
      <div className={styles["tri"]}></div>
      <div className={styles["tri"] + styles["invert"]}></div>
      <div className={styles["tri"]}></div>
      <div className={styles["tri"] + styles["invert"]}></div>
    </div>
  </div>
);

export default Loader_nest;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_nest = () => (
         <div>
          <div className="triangles">
  <div className="tri invert"></div>
  <div className="tri invert"></div>
  <div className="tri"></div>
  <div className="tri invert"></div>
  <div className="tri invert"></div>
  <div className="tri"></div>
  <div className="tri invert"></div>
  <div className="tri"></div>
  <div className="tri invert"></div>
</div>
        </div>
        );

        export default Loader_nest;
        
        
         */
}
