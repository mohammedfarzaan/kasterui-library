import React from "react";
import styles from "./Card_task.module.css";

const Card_task = () => (
  <div>
    <div className={styles["scroll-snap-card"]}>
      <div className={styles["slide"] + styles["red"]}>
        <p className={styles["tip"]}>Scroll On Me</p>
      </div>
      <div className={styles["slide"] + styles["blue"]}>
        <p className={styles["tip"]}>Scroll On Me</p>
      </div>
      <div className={styles["slide"] + styles["green"]}>
        <p className={styles["tip"]}>Scroll On Me</p>
      </div>
    </div>
  </div>
);

export default Card_task;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_task = () => (
         <div>
          <div className="scroll-snap-card">
    <div className="slide red">
        <p className="tip">Scroll On Me</p>
    </div>
    <div className="slide blue">
        <p className="tip">Scroll On Me</p>
    </div>
    <div className="slide green">
        <p className="tip">Scroll On Me</p>
    </div>
</div>
        </div>
        );

        export default Card_task;
        
        
         */
}
