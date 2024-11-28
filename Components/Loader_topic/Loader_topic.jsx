import React from "react";
import styles from "./Loader_topic.module.css";

const Loader_topic = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader__circle"]}></div>
      <div className={styles["loader__circle"]}></div>
      <div className={styles["loader__circle"]}></div>
      <div className={styles["loader__circle"]}></div>
      <div className={styles["loader__circle"]}></div>
    </div>
  </div>
);

export default Loader_topic;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_topic = () => (
         <div>
          <div className="loader">
  <div className="loader__circle"></div>
  <div className="loader__circle"></div>
  <div className="loader__circle"></div>
  <div className="loader__circle"></div>
  <div className="loader__circle"></div>
</div>
        </div>
        );

        export default Loader_topic;
        
        
         */
}