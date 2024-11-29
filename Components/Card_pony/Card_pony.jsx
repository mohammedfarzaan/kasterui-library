import React from "react";
import styles from "./Card_pony.module.css";

const Card_pony = () => (
  <div>
    <div className={styles["card"]}></div>
  </div>
);

export default Card_pony;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_pony = () => (
         <div>
          <div className="card"></div>
        </div>
        );

        export default Card_pony;
        
        
         */
}