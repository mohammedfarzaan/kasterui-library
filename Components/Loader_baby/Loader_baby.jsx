import React from "react";
import styles from "./Loader_baby.module.css";

const Loader_baby = () => (
  <div>
    <div className={styles["loader"]}>
      <div data-glitch="Loading..." className={styles["glitch"]}>
        Loading...
      </div>
    </div>
  </div>
);

export default Loader_baby;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_baby = () => (
         <div>
          <div className="loader">
   <div data-glitch="Loading..." className="glitch">Loading...</div>
</div>
        </div>
        );

        export default Loader_baby;
        
        
         */
}
