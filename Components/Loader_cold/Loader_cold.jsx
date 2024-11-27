import React from "react";
import styles from "./Loader_cold.module.css";

const Loader_cold = () => (
  <div>
    <div className={styles["spinner"]}>
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
    </div>
  </div>
);

export default Loader_cold;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_cold = () => (
         <div>
          <div className="spinner">
  <span>L</span>
  <span>O</span>
  <span>A</span>
  <span>D</span>
  <span>I</span>
  <span>N</span>
  <span>G</span>
</div>
        </div>
        );

        export default Loader_cold;
        
        
         */
}
