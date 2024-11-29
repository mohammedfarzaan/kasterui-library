import React from "react";
import styles from "./Card_deer.module.css";

const Card_deer = () => (
  <div>
    <div className={styles["wrapper"]}>
      <div className={styles["display"]}>
        <div id="time"></div>
      </div>
      <span></span>
      <span></span>
    </div>
  </div>
);

export default Card_deer;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_deer = () => (
         <div>
          <div className="wrapper">
  <div className="display">
    <div id="time"></div>
  </div>
  <span></span>
  <span></span>
</div>
        </div>
        );

        export default Card_deer;
        
        
         */
}
