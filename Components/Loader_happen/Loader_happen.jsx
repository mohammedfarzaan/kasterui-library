import React from "react";
import styles from "./Loader_happen.module.css";

const Loader_happen = () => (
  <div>
    <div className={styles["load-row"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

export default Loader_happen;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_happen = () => (
         <div>
          <div className="load-row">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
        </div>
        );

        export default Loader_happen;
        
        
         */
}
