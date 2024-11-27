import React from "react";
import styles from "./Loader_golden.module.css";

const Loader_golden = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["in"]}></div>
      <div className={styles["out-1"]}></div>
      <div className={styles["out-2"]}></div>
      <div className={styles["out-3"]}></div>
    </div>
  </div>
);

export default Loader_golden;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_golden = () => (
         <div>
          <div className="loader">
<div className="in"></div>
<div className="out-1"></div>
<div className="out-2"></div>
<div className="out-3"></div>
</div>
        </div>
        );

        export default Loader_golden;
        
        
         */
}
