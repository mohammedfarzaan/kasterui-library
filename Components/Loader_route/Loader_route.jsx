import React from "react";
import styles from "./Loader_route.module.css";

const Loader_route = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["orbe"]} style="--index: 0"></div>
      <div className={styles["orbe"]} style="--index: 1"></div>
      <div className={styles["orbe"]} style="--index: 2"></div>
      <div className={styles["orbe"]} style="--index: 3"></div>
      <div className={styles["orbe"]} style="--index: 4"></div>
    </div>
  </div>
);

export default Loader_route;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_route = () => (
         <div>
          <div className="loader">
    <div className="orbe" style="--index: 0"></div>
    <div className="orbe" style="--index: 1"></div>
    <div className="orbe" style="--index: 2"></div>
    <div className="orbe" style="--index: 3"></div>
    <div className="orbe" style="--index: 4"></div>
</div>
        </div>
        );

        export default Loader_route;
        
        
         */
}
