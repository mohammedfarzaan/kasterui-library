import React from "react";
import styles from "./Loader_wait.module.css";

const Loader_wait = () => (
  <div>
    <div className={styles["loader"]}>
      <span id="one"></span>
      <span id="two"></span>
      <span id="three"></span>
    </div>
  </div>
);

export default Loader_wait;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_wait = () => (
         <div>
          <div className="loader"> 
  <span id="one"></span>
  <span id="two"></span>
  <span id="three"></span>
</div>
        </div>
        );

        export default Loader_wait;
        
        
         */
}
