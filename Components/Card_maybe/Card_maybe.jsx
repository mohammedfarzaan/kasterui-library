import React from "react";
import styles from "./Card_maybe.module.css";

const Card_maybe = () => (
  <div>
    <div className={styles["card"]}>Good morning</div>
  </div>
);

export default Card_maybe;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_maybe = () => (
         <div>
          <div className="card">Good morning</div>
        </div>
        );

        export default Card_maybe;
        
        
         */
}