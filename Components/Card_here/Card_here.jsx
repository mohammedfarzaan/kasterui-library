import React from "react";
import styles from "./Card_here.module.css";

const Card_here = () => (
  <div>
    <div className={styles["card"]}></div>
  </div>
);

export default Card_here;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_here = () => (
         <div>
          <div className="card"></div>
        </div>
        );

        export default Card_here;
        
        
         */
}
