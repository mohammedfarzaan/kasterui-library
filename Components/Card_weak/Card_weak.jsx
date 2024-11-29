import React from "react";
import styles from "./Card_weak.module.css";

const Card_weak = () => (
  <div>
    <div className={styles["card"]}>
      <button className={styles["red-btn"]}>OPS TEAM</button>

      <button className={styles["blue-btn"]}>START-UP</button>
    </div>
  </div>
);

export default Card_weak;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_weak = () => (
         <div>
          <div className="card">
  <button className="red-btn">OPS TEAM</button>

  <button className="blue-btn">START-UP</button>
</div>
        </div>
        );

        export default Card_weak;
        
        
         */
}
