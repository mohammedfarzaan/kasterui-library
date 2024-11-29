import React from "react";
import styles from "./Card_proper.module.css";

const Card_proper = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-content"]}>
        <p className={styles["card-title"]}>Card hover effect</p>
        <p className={styles["card-para"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </div>
);

export default Card_proper;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_proper = () => (
         <div>
          <div className="card">
  <div className="card-content">
    <p className="card-title">Card hover effect
    </p><p className="card-para">Lorem ipsum dolor sit 
      amet, consectetur adipiscing elit.</p>
  </div>
</div>
        </div>
        );

        export default Card_proper;
        
        
         */
}
