import React from "react";
import styles from "./Loader_field.module.css";

const Loader_field = () => (
  <div>
    <div aria-live="assertive" role="alert" className={styles["loader"]}></div>
  </div>
);

export default Loader_field;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_field = () => (
         <div>
          <div aria-live="assertive" role="alert" className="loader"></div>
        </div>
        );

        export default Loader_field;
        
        
         */
}
