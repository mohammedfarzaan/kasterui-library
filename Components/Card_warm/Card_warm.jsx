import React from "react";
import styles from "./Card_warm.module.css";

const Card_warm = () => (
  <div>
    <div className={styles["card"]}>
      <span>In this article</span>
      <div className={styles["card__container"]}>
        <p className={styles["element"]}>Try it</p>
        <p className={styles["element"]}>Syntax</p>
        <p className={styles["element"] + styles["active"]}>
          Formal definition
        </p>
        <p className={styles["element"]}>Formal syntax</p>
        <p className={styles["element"]}>Examples</p>
        <p className={styles["element"]}>See also</p>
      </div>
    </div>
  </div>
);

export default Card_warm;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_warm = () => (
         <div>
          <div className="card">
  <span>In this article</span>
  <div className="card__container">
   <p className="element">Try it</p> 
   <p className="element">Syntax</p> 
   <p className="element active">Formal definition</p> 
   <p className="element">Formal syntax</p> 
   <p className="element">Examples</p> 
   <p className="element">See also</p> 
  </div>
</div>
        </div>
        );

        export default Card_warm;
        
        
         */
}
