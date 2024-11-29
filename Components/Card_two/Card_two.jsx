import React from "react";
import styles from "./Card_two.module.css";

const Card_two = () => (
  <div>
    <div className={styles["card"]}>My Card</div>
  </div>
);

export default Card_two;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_two = () => (
         <div>
          <div className="card">My Card</div>
        </div>
        );

        export default Card_two;
        
        
         */
}
