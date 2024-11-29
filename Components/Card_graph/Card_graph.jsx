import React from "react";
import styles from "./Card_graph.module.css";

const Card_graph = () => (
  <div>
    <div className={styles["face"]}>
      <p className={styles["v-index"]}>II</p>
      <p className={styles["h-index"]}>II</p>
      <div className={styles["hand"]}>
        <div className={styles["hand"]}>
          <div className={styles["hour"]}></div>
          <div className={styles["minute"]}></div>
          <div className={styles["second"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_graph;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_graph = () => (
         <div>
          <div className="face">
    <p className="v-index">II
    </p>
    <p className="h-index">II
    </p>
    <div className="hand">
        <div className="hand">
            <div className="hour"></div>
            <div className="minute"></div>
            <div className="second"></div>
        </div>
    </div>
</div>
        </div>
        );

        export default Card_graph;
        
        
         */
}
