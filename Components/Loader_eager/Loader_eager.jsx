import React from "react";
import styles from "./Loader_eager.module.css";

const Loader_eager = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["square"]}>
        <span style="--i:0;"></span>
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
      </div>
      <div className={styles["square"]}>
        <span style="--i:0;"></span>
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
      </div>
      <div className={styles["square"]}>
        <span style="--i:0;"></span>
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
      </div>
    </div>
  </div>
);

export default Loader_eager;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_eager = () => (
         <div>
          <div className="container">
  <div className="square">
    <span style="--i:0;"></span>
    <span style="--i:1;"></span>
    <span style="--i:2;"></span>
    <span style="--i:3;"></span>
  </div>
  <div className="square">
    <span style="--i:0;"></span>
    <span style="--i:1;"></span>
    <span style="--i:2;"></span>
    <span style="--i:3;"></span>
  </div>
  <div className="square">
    <span style="--i:0;"></span>
    <span style="--i:1;"></span>
    <span style="--i:2;"></span>
    <span style="--i:3;"></span>
  </div>
</div>
        </div>
        );

        export default Loader_eager;
        
        
         */
}
