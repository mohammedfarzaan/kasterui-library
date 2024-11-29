import React from "react";
import styles from "./Card_jet.module.css";

const Card_jet = () => (
  <div>
    <div className={styles["cards"]}>
      <figure className={styles["card"]}>
        <figcaption className={styles["card_title"]}>3D Hover</figcaption>
      </figure>
    </div>
  </div>
);

export default Card_jet;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_jet = () => (
         <div>
          <div className="cards">
    <figure className="card">
        <figcaption className="card_title">3D Hover</figcaption>
    </figure>
</div>
        </div>
        );

        export default Card_jet;
        
        
         */
}
