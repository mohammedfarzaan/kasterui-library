import React from "react";
import styles from "./Loader_mass.module.css";

const Loader_mass = () => (
  <div>
    <div className={styles["loader"]}>
      <label>Redirecting...</label>
      <div className={styles["loading"]}></div>
    </div>
  </div>
);

export default Loader_mass;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_mass = () => (
         <div>
          <div className="loader">
  <label>Redirecting...</label>
  <div className="loading"></div>
</div>
        </div>
        );

        export default Loader_mass;
        
        
         */
}
