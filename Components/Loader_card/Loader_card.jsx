import React from "react";
import styles from "./Loader_card.module.css";

const Loader_card = () => (
  <div>
    <div className={styles["loader"]}>
      <li className={styles["orb"]}></li>
      <li className={styles["orb"]}></li>
      <li className={styles["orb"]}></li>
      <li className={styles["orb"]}></li>
      <li className={styles["orb"]}></li>
      <li className={styles["orb"]}></li>
      <li className={styles["orb"]}></li>
      <li className={styles["orb"]}></li>
      <li className={styles["orb"]}></li>
    </div>
  </div>
);

export default Loader_card;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_card = () => (
         <div>
          <div className="loader">
  <li className="orb"></li>
  <li className="orb"></li>
  <li className="orb"></li>
  <li className="orb"></li>
  <li className="orb"></li>
  <li className="orb"></li>
  <li className="orb"></li>
  <li className="orb"></li>
  <li className="orb"></li>
</div>
        </div>
        );

        export default Loader_card;
        
        
         */
}
