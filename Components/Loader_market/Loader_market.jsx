import React from "react";
import styles from "./Loader_market.module.css";

const Loader_market = () => (
  <div>
    <div className={styles["loader"]}>
      <svg
        className={styles["svg-wrap"]}
        viewBox="0 0 100 50"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <circle
          strokeLinecap="round"
          strokeWidth="2"
          className={styles["svg-stroke"]}
          cy="25"
          cx="50"
          r="15"
        ></circle>
        <circle
          className={styles["circle"] + styles["circle-one"]}
          cy="25"
          cx="35"
          r="1"
        ></circle>
        <circle
          className={styles["circle"] + styles["circle-two"]}
          cy="25"
          cx="45"
          r="1"
        ></circle>
        <circle
          className={styles["circle"] + styles["circle-three"]}
          cy="25"
          cx="55"
          r="1"
        ></circle>
      </svg>
    </div>
  </div>
);

export default Loader_market;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_market = () => (
         <div>
          <div className="loader">
  <svg className="svg-wrap" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <circle strokeLinecap="round" strokeWidth="2" className="svg-stroke" cy="25" cx="50" r="15"></circle>
    <circle className="circle circle-one" cy="25" cx="35" r="1"></circle>
    <circle className="circle circle-two" cy="25" cx="45" r="1"></circle>
    <circle className="circle circle-three" cy="25" cx="55" r="1"></circle>
  </svg>  
</div>
        </div>
        );

        export default Loader_market;
        
        
         */
}
