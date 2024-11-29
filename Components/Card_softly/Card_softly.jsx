import React from "react";
import styles from "./Card_softly.module.css";

const Card_softly = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["card_box"]}>
        <span></span>
      </div>
    </div>
  </div>
);

export default Card_softly;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_softly = () => (
         <div>
          <div className="container">
    <div className="card_box">
        <span></span>
    </div>
</div>
        </div>
        );

        export default Card_softly;
        
        
         */
}
