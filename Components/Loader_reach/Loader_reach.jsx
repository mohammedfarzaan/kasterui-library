import React from "react";
import styles from "./Loader_reach.module.css";

const Loader_reach = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["leaf"]}></div>
      <div className={styles["leaf"]}></div>
      <div className={styles["leaf"]}></div>
    </div>
  </div>
);

export default Loader_reach;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_reach = () => (
         <div>
          <div className="loader">
  <div className="leaf"></div>
  <div className="leaf"></div>
  <div className="leaf"></div>
</div>
        </div>
        );

        export default Loader_reach;
        
        
         */
}
