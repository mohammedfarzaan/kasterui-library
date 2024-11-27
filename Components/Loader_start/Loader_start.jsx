import React from "react";
import styles from "./Loader_start.module.css";

const Loader_start = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["intern"]}></div>
      <div className={styles["external-shadow"]}>
        <div className={styles["central"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_start;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_start = () => (
         <div>
          <div className="loader">
      <div className="intern">
      </div>
  <div className="external-shadow">
    <div className="central">
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_start;
        
        
         */
}
