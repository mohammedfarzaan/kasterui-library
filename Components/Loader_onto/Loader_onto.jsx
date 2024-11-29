import React from "react";
import styles from "./Loader_onto.module.css";

const Loader_onto = () => (
  <div>
    <div className={styles["milk-loader"]}>
      <div className={styles["glass"]}>
        <div className={styles["milk"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_onto;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_onto = () => (
         <div>
          <div className="milk-loader">
  <div className="glass">
    <div className="milk"></div>
  </div>
</div>
        </div>
        );

        export default Loader_onto;
        
        
         */
}
