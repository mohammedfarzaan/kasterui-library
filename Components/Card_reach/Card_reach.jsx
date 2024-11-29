import React from "react";
import styles from "./Card_reach.module.css";

const Card_reach = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["lc"] + styles["cavity"]}></div>
      <div className={styles["lc"] + styles["line"]}></div>
      <div className={styles["led"]}></div>
      <div className={styles["text"]}>UIVERSE</div>
    </div>
  </div>
);

export default Card_reach;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_reach = () => (
         <div>
          <div className="card">
  <div className="lc cavity"></div>
  <div className="lc line"></div>
  <div className="led"></div>
  <div className="text">UIVERSE</div>
</div>
        </div>
        );

        export default Card_reach;
        
        
         */
}
