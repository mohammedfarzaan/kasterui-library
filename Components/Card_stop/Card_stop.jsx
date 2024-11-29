import React from "react";
import styles from "./Card_stop.module.css";

const Card_stop = () => (
  <div>
    <div className={styles["card"] + styles["card-5"]}>
      <div className={styles["card__icon"]}>🏆</div>
      <p className={styles["card__exit"]}>※</p>
      <div className={styles["text"]}>
        Ut aliquip ex ea commodo consequat. Duis aute irure dolor
      </div>
      <p className={styles["card__apply"]}>
        <a className={styles["card__link"]} href="#">
          Apply Now <i className={styles["fas"] + styles["fa-arrow-right"]}></i>
        </a>
      </p>
    </div>
  </div>
);

export default Card_stop;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_stop = () => (
         <div>
          <div className="card card-5">
  <div className="card__icon">🏆</div>
  <p className="card__exit">※</p>
  <div className="text">Ut aliquip ex ea commodo consequat. Duis aute irure dolor</div>
  <p className="card__apply">
    <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right"></i></a>
  </p>
</div>
        </div>
        );

        export default Card_stop;
        
        
         */
}
