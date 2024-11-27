import React from "react";
import styles from "./Loader_shape.module.css";

const Loader_shape = () => (
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

export default Loader_shape;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_shape = () => (
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

        export default Loader_shape;
        
        
         */
}
