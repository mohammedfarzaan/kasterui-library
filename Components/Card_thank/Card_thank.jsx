import React from "react";
import styles from "./Card_thank.module.css";

const Card_thank = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["details"]}>
        <div className={styles["cardHeader"]}>CSS Hover Animation</div>
        <div className={styles["cardText"]}>
          Welcome to this card where i have made use of the "Hover" effect to
          add some really cool interactions to it. Enjoy
        </div>
        <div className={styles["button"]}>Learn More</div>
      </div>
    </div>
  </div>
);

export default Card_thank;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_thank = () => (
         <div>
          <div className="card">
  <div className="details">
    <div className="cardHeader">CSS Hover Animation</div>
    <div className="cardText">
      Welcome to this card where i have made use of the "Hover" effect to add
      some really cool interactions to it. Enjoy
    </div>
    <div className="button">Learn More</div>
  </div>
</div>
        </div>
        );

        export default Card_thank;
        
        
         */
}
