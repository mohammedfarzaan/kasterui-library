import React from "react";
import styles from "./Loader_loud.module.css";

const Loader_loud = () => (
  <div>
    <label className={styles["loader"]}>
      <span className={styles["slider"]}></span>
    </label>
  </div>
);

export default Loader_loud;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_loud = () => (
         <div>
          <label className="loader">
  <span className="slider"></span>
</label>
        </div>
        );

        export default Loader_loud;
        
        
         */
}
