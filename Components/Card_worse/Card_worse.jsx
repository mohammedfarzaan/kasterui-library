import React from "react";
import styles from "./Card_worse.module.css";

const Card_worse = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["data"]}>
        <p>34° 36' 30″ S; 58° 22' 16″ O</p>
      </div>
      <div className={styles["card"]}>
        <div className={styles["circle"]}></div>
        <div className={styles["dot"]}></div>
        <div className={styles["dot2"]}></div>
      </div>
    </div>
  </div>
);

export default Card_worse;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_worse = () => (
         <div>
          <div className="container">
  <div className="data">
    <p>34° 36' 30″ S; 58° 22' 16″ O</p>
  </div>
  <div className="card">
    <div className="circle"></div>
    <div className="dot"></div>
    <div className="dot2"></div>
  </div>
</div>
        </div>
        );

        export default Card_worse;
        
        
         */
}
