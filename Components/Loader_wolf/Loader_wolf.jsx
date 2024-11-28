import React from "react";
import styles from "./Loader_wolf.module.css";

const Loader_wolf = () => (
  <div>
    <div className={styles["loadingspinner"]}>
      <div id="square1"></div>
      <div id="square2"></div>
      <div id="square3"></div>
      <div id="square4"></div>
      <div id="square5"></div>
    </div>
  </div>
);

export default Loader_wolf;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_wolf = () => (
         <div>
          <div className="loadingspinner">
  <div id="square1"></div>
  <div id="square2"></div>
  <div id="square3"></div>
  <div id="square4"></div>
  <div id="square5"></div>
</div>
        </div>
        );

        export default Loader_wolf;
        
        
         */
}
