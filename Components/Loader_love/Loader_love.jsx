import React from "react";
import styles from "./Loader_love.module.css";

const Loader_love = () => (
  <div>
    <div className={styles["phone"]}>
      <span className={styles["loader"]}></span>
      <span className={styles["text"]}>Loading...</span>
    </div>
  </div>
);

export default Loader_love;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_love = () => (
         <div>
          <div className="phone">
  <span className="loader"></span>
  <span className="text">Loading...</span>
</div>
        </div>
        );

        export default Loader_love;
        
        
         */
}
