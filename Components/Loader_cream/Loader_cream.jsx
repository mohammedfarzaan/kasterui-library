import React from "react";
import styles from "./Loader_cream.module.css";

const Loader_cream = () => (
  <div>
    <div id="col">
      <div id="img-wrap">
        <span className={styles["loader"]}></span>
      </div>
    </div>
  </div>
);

export default Loader_cream;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_cream = () => (
         <div>
          <div id="col">
  <div id="img-wrap">
    <span className="loader"></span>
</div></div>
        </div>
        );

        export default Loader_cream;
        
        
         */
}