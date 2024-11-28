import React from "react";
import styles from "./Loader_window.module.css";

const Loader_window = () => (
  <div>
    <ul className={styles["loader"]}>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
);

export default Loader_window;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_window = () => (
         <div>
          <ul className="loader">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
        </div>
        );

        export default Loader_window;
        
        
         */
}
