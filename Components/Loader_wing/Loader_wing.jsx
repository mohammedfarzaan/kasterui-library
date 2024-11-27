import React from "react";
import styles from "./Loader_wing.module.css";

const Loader_wing = () => (
  <div>
    <div className={styles["loader"]}>
      <span className={styles["bar"]}></span>
      <span className={styles["bar"]}></span>
      <span className={styles["bar"]}></span>
    </div>
  </div>
);

export default Loader_wing;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_wing = () => (
         <div>
          <div className="loader">
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
</div>
        </div>
        );

        export default Loader_wing;
        
        
         */
}
