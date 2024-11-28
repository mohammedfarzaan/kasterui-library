import React from "react";
import styles from "./Loader_danger.module.css";

const Loader_danger = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__skeleton"] + styles["card__title"]}></div>
      <div className={styles["card__skeleton"] + styles["card__description"]}>
        {" "}
      </div>
    </div>
  </div>
);

export default Loader_danger;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_danger = () => (
         <div>
          <div className="card">
  <div className="card__skeleton card__title"></div>
  <div className="card__skeleton card__description">         </div>
</div>
        </div>
        );

        export default Loader_danger;
        
        
         */
}
