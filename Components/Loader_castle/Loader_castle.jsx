import React from "react";
import styles from "./Loader_castle.module.css";

const Loader_castle = () => (
  <div>
    <div className={styles["spinner"]}></div>
  </div>
);

export default Loader_castle;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_castle = () => (
         <div>
          <div className="spinner">
</div>
        </div>
        );

        export default Loader_castle;
        
        
         */
}