import React from "react";
import styles from "./Card_trick.module.css";

const Card_trick = () => (
  <div>
    <div className={styles["stats"] + styles["shadow"]}>
      <div className={styles["stat"]}>
        <div className={styles["stat-title"]}>Total Page Views</div>
        <div className={styles["stat-value"]}>89,400</div>
        <div className={styles["stat-desc"]}>21% more than last month</div>
      </div>
    </div>
  </div>
);

export default Card_trick;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_trick = () => (
         <div>
          <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-title">Total Page Views</div>
    <div className="stat-value">89,400</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
</div>
        </div>
        );

        export default Card_trick;
        
        
         */
}
