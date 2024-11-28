import React from "react";
import styles from "./Loader_ask.module.css";

const Loader_ask = () => (
  <div>
    <div className={styles["ui-abstergo"]}>
      <div className={styles["abstergo-loader"]}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles["ui-text"]}>
        Synchronization
        <div className={styles["ui-dot"]}></div>
        <div className={styles["ui-dot"]}></div>
        <div className={styles["ui-dot"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_ask;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_ask = () => (
         <div>
          <div className="ui-abstergo">
  <div className="abstergo-loader">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div className="ui-text">
    Synchronization
    <div className="ui-dot"></div>
    <div className="ui-dot"></div>
    <div className="ui-dot"></div>
  </div>
</div>
        </div>
        );

        export default Loader_ask;
        
        
         */
}
