import React from "react";
import styles from "./Card_having.module.css";

const Card_having = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["img"] + styles["img1"]}></div>
      <div className={styles["img"] + styles["img2"]}></div>
      <div className={styles["card__content"]}>
        <span className={styles["name"]}>John Doe</span>
        <span className={styles["job"]}>Software engineer</span>
      </div>
    </div>
  </div>
);

export default Card_having;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_having = () => (
         <div>
          <div className="card">
    <div className="img img1"></div>
    <div className="img img2"></div>
    <div className="card__content">
        <span className="name">John Doe</span>
        <span className="job">Software engineer</span>
    </div>
</div>
        </div>
        );

        export default Card_having;
        
        
         */
}
