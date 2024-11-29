import React from "react";
import styles from "./Loader_prove.module.css";

const Loader_prove = () => (
  <div>
    <ul>
      <li>
        <div className={styles["loader"]}>
          <div className={styles["child"]}></div>
        </div>
      </li>

      <li>
        <div className={styles["text"]}></div>
      </li>
    </ul>
  </div>
);

export default Loader_prove;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_prove = () => (
         <div>
          <ul>
  <li>
    <div className="loader">
      <div className="child"></div>
    </div>
  </li>

  <li>
    <div className="text"></div>
  </li>
</ul>
        </div>
        );

        export default Loader_prove;
        
        
         */
}
