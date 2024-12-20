import React from "react";
import styles from "./Loader_card.module.css";

const Loader_card = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["circle"] + styles["circle-1"]}></div>
      <div className={styles["circle"] + styles["circle-2"]}></div>
      <div className={styles["circle"] + styles["circle-3"]}></div>
      <div className={styles["circle"] + styles["circle-4"]}></div>
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
  <div className="circle circle-1"></div>
  <div className="circle circle-2"></div>
  <div className="circle circle-3"></div>
  <div className="circle circle-4"></div>
</div>
        </div>
        );

        export default Loader_card;
        
        
         */
}
