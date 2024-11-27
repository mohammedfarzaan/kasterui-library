import React from "react";
import styles from "./Loader_means.module.css";

const Loader_means = () => (
  <div>
    <div className={styles["container"]}>
      <svg width="100%" height="100" viewBox="-1 -1 22 22">
        <path style="--order: 7" className="eight e-8"></path>
        <path style="--order: 6" className="eight e-7"></path>
        <path style="--order: 5" className="eight e-6"></path>
        <path style="--order: 4" className="eight e-5"></path>
        <path style="--order: 3" className="eight e-4"></path>
        <path style="--order: 2" className="eight e-3"></path>
        <path style="--order: 1" className="eight e-2"></path>
        <path style="--order: 0" className="eight e-1"></path>
      </svg>
    </div>
  </div>
);

export default Loader_means;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_means = () => (
         <div>
          <div className="container">
    <svg width="100%" height="100" viewBox="-1 -1 22 22">
        <path style="--order: 7" className="eight e-8"></path>
        <path style="--order: 6" className="eight e-7"></path>
        <path style="--order: 5" className="eight e-6"></path>
        <path style="--order: 4" className="eight e-5"></path>
        <path style="--order: 3" className="eight e-4"></path>
        <path style="--order: 2" className="eight e-3"></path>
        <path style="--order: 1" className="eight e-2"></path>
        <path style="--order: 0" className="eight e-1"></path>
    </svg>
</div>
        </div>
        );

        export default Loader_means;
        
        
         */
}
