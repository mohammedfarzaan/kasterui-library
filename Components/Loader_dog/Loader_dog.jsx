import React from "react";
import styles from "./Loader_dog.module.css";

const Loader_dog = () => (
  <div>
    <div className={styles["glowing-cube"]}>
      <div className={styles["top"]}>❤</div>
      <div>
        <span style="--i:0;"></span>
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
      </div>
    </div>
  </div>
);

export default Loader_dog;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_dog = () => (
         <div>
          <div className="glowing-cube">
  <div className="top">❤</div>
  <div>
    <span style="--i:0;"></span>
    <span style="--i:1;"></span>
    <span style="--i:2;"></span>
    <span style="--i:3;"></span>
  </div>
</div>
        </div>
        );

        export default Loader_dog;
        
        
         */
}
