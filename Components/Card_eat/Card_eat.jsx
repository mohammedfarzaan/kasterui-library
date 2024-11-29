import React from "react";
import styles from "./Card_eat.module.css";

const Card_eat = () => (
  <div>
    <div className={styles["cards"]}>
      <div className={styles["card"] + styles["red"]}>
        <p className={styles["tip"]}>Hover Me</p>
      </div>
      <div className={styles["card"] + styles["blue"]}>
        <p className={styles["tip"]}>Hover Me</p>
      </div>
      <div className={styles["card"] + styles["green"]}>
        <p className={styles["tip"]}>Hover Me</p>
      </div>
    </div>
  </div>
);

export default Card_eat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_eat = () => (
         <div>
          <div className="cards">
  <div className="card red">
    <p className="tip">Hover Me</p>
  </div>
  <div className="card blue">
    <p className="tip">Hover Me</p>
  </div>
  <div className="card green">
    <p className="tip">Hover Me</p>
  </div>
</div>
        </div>
        );

        export default Card_eat;
        
        
         */
}
