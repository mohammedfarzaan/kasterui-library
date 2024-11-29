import React from "react";
import styles from "./Loader_mud.module.css";

const Loader_mud = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["book"]}>
        <div className={styles["page"]}></div>
        <div className={styles["page"] + styles["page2"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_mud;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_mud = () => (
         <div>
          <div className="loader">
  <div className="book">
    <div className="page"></div>
    <div className="page page2"></div>
  </div>
</div>
        </div>
        );

        export default Loader_mud;
        
        
         */
}
