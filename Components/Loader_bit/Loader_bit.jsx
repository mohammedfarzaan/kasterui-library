import React from "react";
import styles from "./Loader_bit.module.css";

const Loader_bit = () => (
  <div>
    <div className={styles["loader"] + styles["l1"]}></div>
    <div className={styles["loader"] + styles["l2"]}></div>
    <div className={styles["loader"] + styles["l3"]}></div>
    <div className={styles["loader"] + styles["l4"]}></div>
    <div className={styles["loader"] + styles["l5"]}></div>
    <div className={styles["loader"] + styles["l6"]}></div>
    <div className={styles["loader"] + styles["l7"]}></div>
  </div>
);

export default Loader_bit;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_bit = () => (
         <div>
          <div className="loader l1"></div>
<div className="loader l2"></div>
<div className="loader l3"></div>
<div className="loader l4"></div>
<div className="loader l5"></div>
<div className="loader l6"></div>
<div className="loader l7"></div>
        </div>
        );

        export default Loader_bit;
        
        
         */
}
