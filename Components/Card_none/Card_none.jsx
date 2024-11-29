import React from "react";
import styles from "./Card_none.module.css";

const Card_none = () => (
  <div>
    <div className={styles["parent"]}>
      <div className={styles["card"]}>
        <div className={styles["content-box"]}>
          <span className={styles["card-title"]}>3D Card</span>
          <p className={styles["card-content"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <span className={styles["see-more"]}>See More</span>
        </div>
        <div className={styles["date-box"]}>
          <span className={styles["month"]}>JUNE</span>
          <span className={styles["date"]}>29</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card_none;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_none = () => (
         <div>
          <div className="parent">
  <div className="card">
      <div className="content-box">
          <span className="card-title">3D Card</span>
          <p className="card-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </p>
          <span className="see-more">See More</span>
      </div>
      <div className="date-box">
          <span className="month">JUNE</span>
          <span className="date">29</span>
      </div>
  </div>
</div>
        </div>
        );

        export default Card_none;
        
        
         */
}
