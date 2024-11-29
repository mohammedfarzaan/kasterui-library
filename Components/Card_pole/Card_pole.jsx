import React from "react";
import styles from "./Card_pole.module.css";

const Card_pole = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["dots"]}>
        <p>..................</p>
      </div>
    </div>
  </div>
);

export default Card_pole;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_pole = () => (
         <div>
          <div className="card">
  <div className="dots">
    <p>..................</p>
  </div>
</div>
        </div>
        );

        export default Card_pole;
        
        
         */
}
