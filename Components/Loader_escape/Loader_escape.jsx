import React from "react";
import styles from "./Loader_escape.module.css";

const Loader_escape = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader-circle"]}></div>
      <div className={styles["loader-circle"]}></div>
      <div className={styles["loader-circle"]}></div>
    </div>
  </div>
);

export default Loader_escape;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_escape = () => (
         <div>
          <div className="loader">
  <div className="loader-circle"></div>
  <div className="loader-circle"></div>
  <div className="loader-circle"></div>
</div>
        </div>
        );

        export default Loader_escape;
        
        
         */
}
