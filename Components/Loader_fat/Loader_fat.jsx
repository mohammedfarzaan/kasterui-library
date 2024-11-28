import React from "react";
import styles from "./Loader_fat.module.css";

const Loader_fat = () => (
  <div>
    <div className={styles["spinner"]}>
      <svg viewBox="25 25 50 50" className="circular">
        <circle
          stroke-miterlimit="10"
          strokeWidth="3"
          fill="none"
          r="20"
          cy="50"
          cx="50"
          className="path"
        ></circle>
      </svg>
    </div>
  </div>
);

export default Loader_fat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_fat = () => (
         <div>
          <div className="spinner">
    <svg viewBox="25 25 50 50" className="circular">
        <circle stroke-miterlimit="10" strokeWidth="3" fill="none" r="20" cy="50" cx="50" className="path"></circle>
    </svg>
</div>
        </div>
        );

        export default Loader_fat;
        
        
         */
}
