import React from "react";
import styles from "./Card_flight.module.css";

const Card_flight = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["card"]}>hover</div>
    </div>
  </div>
);

export default Card_flight;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_flight = () => (
         <div>
          <div className="container">
  <div className="card">
    hover
  </div>
</div>
        </div>
        );

        export default Card_flight;
        
        
         */
}
