import React from "react";
import styles from "./Card_been.module.css";

const Card_been = () => (
  <div>
    <div className={styles["card"]}>
      <div>
        <p className={styles["heading"]}>Popular this month</p>
        <p>Powered By</p>
        <p>Uiverse</p>
      </div>

      <button className={styles["card-button"]}>More Info</button>
    </div>
  </div>
);

export default Card_been;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_been = () => (
         <div>
          <div className="card">
  <div>
    <p className="heading">Popular this month</p>
    <p>Powered By</p>
    <p>Uiverse</p>
  </div>

  <button className="card-button">More Info</button>
</div>
        </div>
        );

        export default Card_been;
        
        
         */
}
