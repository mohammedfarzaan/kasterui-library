import React from "react";
import styles from "./Loader_wet.module.css";

const Loader_wet = () => (
  <div>
    <div className={styles["circ"]}>
      <div className={styles["load"]}>Loading . . . </div>
      <div className={styles["hands"]}></div>
      <div className={styles["body"]}></div>
      <div className={styles["head"]}>
        <div className={styles["eye"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_wet;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_wet = () => (
         <div>
          <div className="circ">
  <div className="load">Loading . . . </div>
  <div className="hands"></div>
  <div className="body"></div>
  <div className="head">
    <div className="eye"></div>
  </div>
</div>
        </div>
        );

        export default Loader_wet;
        
        
         */
}
