import React from "react";
import styles from "./Card_hit.module.css";

const Card_hit = () => (
  <div>
    <div id="card" className={styles["card"]}>
      <div className={styles["content"]}>
        <span>HOVER ME</span>
      </div>
    </div>
  </div>
);

export default Card_hit;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_hit = () => (
         <div>
          <div id="card" className="card">
  <div className="content">
    <span>HOVER ME</span>
  </div>
</div>
        </div>
        );

        export default Card_hit;
        
        
         */
}