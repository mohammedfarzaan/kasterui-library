import React from "react";
import styles from "./Loader_wind.module.css";

const Loader_wind = () => (
  <div>
    <div className={styles["cell"]}>
      <div className={styles["card"]}>
        <span className={styles["flower-loader"]}>Loading…</span>
      </div>
    </div>
  </div>
);

export default Loader_wind;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_wind = () => (
         <div>
          <div className="cell">
  <div className="card">
    <span className="flower-loader">Loading…</span>
  </div>
</div>
        </div>
        );

        export default Loader_wind;
        
        
         */
}
