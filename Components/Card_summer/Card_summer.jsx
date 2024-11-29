import React from "react";
import styles from "./Card_summer.module.css";

const Card_summer = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["image"]}></div>
      <div className={styles["card-info"]}>
        <span>George Johnson</span>
        <p>Support Specialist</p>
      </div>
      <a href="#" className={styles["button"]}>
        Folow
      </a>
    </div>
  </div>
);

export default Card_summer;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_summer = () => (
         <div>
          <div className="card">
  <div className="image"></div>
  <div className="card-info">
    <span>George Johnson</span>
    <p>Support Specialist</p>
  </div>
  <a href="#" className="button">Folow</a>
</div>
        </div>
        );

        export default Card_summer;
        
        
         */
}
