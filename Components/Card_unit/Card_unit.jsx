import React from "react";
import styles from "./Card_unit.module.css";

const Card_unit = () => (
  <div>
    <div className={styles["card"]}>
      <p className={styles["c-txt"]}>Hover Me</p>
    </div>
  </div>
);

export default Card_unit;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_unit = () => (
         <div>
          <div className="card">
  <p className="c-txt">Hover Me</p>
</div>
        </div>
        );

        export default Card_unit;
        
        
         */
}
