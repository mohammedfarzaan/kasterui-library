import React from "react";
import styles from "./Card_for.module.css";

const Card_for = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["txt"]}>Hover Me :)</div>
      <div className={styles["shadow"]}></div>
    </div>
  </div>
);

export default Card_for;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_for = () => (
         <div>
          <div className="card">
        <div className="txt">Hover Me :)</div>
        <div className="shadow"></div>
    </div>
        </div>
        );

        export default Card_for;
        
        
         */
}
