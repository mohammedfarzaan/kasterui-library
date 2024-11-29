import React from "react";
import styles from "./Loader_larger.module.css";

const Loader_larger = () => (
  <div>
    <div className={styles["loading"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="124"
        height="124"
        viewBox="0 0 124 124"
      >
        <circle
          className={styles["circle-loading"]}
          cx="62"
          cy="62"
          r="59"
          fill="none"
          stroke="hsl(271, 76%, 74%)"
          strokeWidth="6px"
        ></circle>
        <circle
          className={styles["circle"]}
          cx="62"
          cy="62"
          r="59"
          fill="none"
          stroke="hsl(271, 76%, 53%)"
          strokeWidth="6px"
          strokeLinecap="round"
        ></circle>
        <polyline
          className={styles["check"]}
          points="73.56 48.63 57.88 72.69 49.38 62"
          fill="none"
          stroke="hsl(271, 76%, 53%)"
          strokeWidth="6px"
          strokeLinecap="round"
        ></polyline>
      </svg>
    </div>
  </div>
);

export default Loader_larger;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_larger = () => (
         <div>
          <div className="loading">
  <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 124 124">
    <circle className="circle-loading" cx="62" cy="62" r="59" fill="none" stroke="hsl(271, 76%, 74%)" strokeWidth="6px"></circle>
    <circle className="circle" cx="62" cy="62" r="59" fill="none" stroke="hsl(271, 76%, 53%)" strokeWidth="6px" strokeLinecap="round"></circle>
    <polyline className="check" points="73.56 48.63 57.88 72.69 49.38 62" fill="none" stroke="hsl(271, 76%, 53%)" strokeWidth="6px" strokeLinecap="round"></polyline>
  </svg>
</div>
        </div>
        );

        export default Loader_larger;
        
        
         */
}
