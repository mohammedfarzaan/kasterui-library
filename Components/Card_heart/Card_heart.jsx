import React from "react";
import styles from "./Card_heart.module.css";

const Card_heart = () => (
  <div>
    <div className={styles["papper"]} draggable="true"></div>
  </div>
);

export default Card_heart;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_heart = () => (
         <div>
          <div className="papper" draggable="true"></div>
        </div>
        );

        export default Card_heart;
        
        
         */
}
