import React from "react";
import styles from "./Loader_actual.module.css";

const Loader_actual = () => (
  <div>
    <div className={styles["loader"]}>
      <li className={styles["dots"]} id="dot-1"></li>
      <li className={styles["dots"]} id="dot-2"></li>
      <li className={styles["dots"]} id="dot-3"></li>
    </div>
  </div>
);

export default Loader_actual;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_actual = () => (
         <div>
          <div className="loader">
        <li className="dots" id="dot-1"></li>
        <li className="dots" id="dot-2"></li>
        <li className="dots" id="dot-3"></li>
    </div>
        </div>
        );

        export default Loader_actual;
        
        
         */
}
