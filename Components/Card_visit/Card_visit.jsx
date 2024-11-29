import React from "react";
import styles from "./Card_visit.module.css";

const Card_visit = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__content"]}>
        your content here ↓<div></div>
      </div>
    </div>
  </div>
);

export default Card_visit;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_visit = () => (
         <div>
          <div className="card">
  <div className="card__content">your content here ↓<div>
</div></div></div>
        </div>
        );

        export default Card_visit;
        
        
         */
}
