import React from "react";
import styles from "./Loader_deeply.module.css";

const Loader_deeply = () => (
  <div>
    <div className={styles["loader"]}>
      <div id="first">
        <div id="second">
          <div id="third"></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_deeply;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_deeply = () => (
         <div>
          <div className="loader">
    <div id="first">
        <div id="second">
            <div id="third">
            </div>
        </div>
    </div>
</div>
        </div>
        );

        export default Loader_deeply;
        
        
         */
}
