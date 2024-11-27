import React from "react";
import styles from "./Loader_anyone.module.css";

const Loader_anyone = () => (
  <div>
    <div className={styles["container"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

export default Loader_anyone;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_anyone = () => (
         <div>
          <div className="container">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
        </div>
        );

        export default Loader_anyone;
        
        
         */
}
