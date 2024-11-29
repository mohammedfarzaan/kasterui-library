import React from "react";
import styles from "./Card_troops.module.css";

const Card_troops = () => (
  <div>
    <div className={styles["border"]}>
      <div className={styles["content"]}></div>
    </div>
  </div>
);

export default Card_troops;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_troops = () => (
         <div>
          <div className="border"><div className="content"></div></div>
        </div>
        );

        export default Card_troops;
        
        
         */
}
