import React from "react";
import styles from "./Card_bad.module.css";

const Card_bad = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__content"]}>
        <div className={styles["card__date"]}> 01 . 05 . 2022</div>
        <div className={styles["card__info"]}>
          <h3>NOTE</h3>
        </div>
      </div>
    </div>
  </div>
);

export default Card_bad;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_bad = () => (
         <div>
          <div className="card">
  <div className="card__content">
    <div className="card__date"> 01 . 05 . 2022
    </div>
    <div className="card__info">
      <h3>NOTE</h3>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_bad;
        
        
         */
}
