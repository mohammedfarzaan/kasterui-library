import React from "react";
import styles from "./Card_quite.module.css";

const Card_quite = () => (
  <div>
    <div className={styles["card"]}>
      <p>Card</p>
    </div>
  </div>
);

export default Card_quite;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_quite = () => (
         <div>
          <div className="card"><p>Card</p></div>
        </div>
        );

        export default Card_quite;
        
        
         */
}
