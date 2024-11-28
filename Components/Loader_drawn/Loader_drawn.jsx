import React from "react";
import styles from "./Loader_drawn.module.css";

const Loader_drawn = () => (
  <div>
    <div className={styles["loader"]}>
      <i></i>
    </div>
  </div>
);

export default Loader_drawn;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_drawn = () => (
         <div>
          <div className="loader"><i></i></div>
        </div>
        );

        export default Loader_drawn;
        
        
         */
}
