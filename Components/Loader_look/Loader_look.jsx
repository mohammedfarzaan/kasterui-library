import React from "react";
import styles from "./Loader_look.module.css";

const Loader_look = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["inner_loader"]}></div>
    </div>
  </div>
);

export default Loader_look;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_look = () => (
         <div>
          <div className="loader">
  <div className="inner_loader"></div>
</div>
        </div>
        );

        export default Loader_look;
        
        
         */
}
