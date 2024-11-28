import React from "react";
import styles from "./Loader_rhythm.module.css";

const Loader_rhythm = () => (
  <div>
    <div className={styles["ui-loader"] + styles["loader-blk"]}>
      <svg viewBox="22 22 44 44" className="multiColor-loader">
        <circle
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          strokeWidth="3.6"
          className="loader-circle loader-circle-animation"
        ></circle>
      </svg>
    </div>
  </div>
);

export default Loader_rhythm;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_rhythm = () => (
         <div>
          <div className="ui-loader loader-blk">
    <svg viewBox="22 22 44 44" className="multiColor-loader">
        <circle cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6" className="loader-circle loader-circle-animation"></circle>
    </svg>
</div>
        </div>
        );

        export default Loader_rhythm;
        
        
         */
}
