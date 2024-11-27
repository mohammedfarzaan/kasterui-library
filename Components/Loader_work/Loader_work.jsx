import React from "react";
import styles from "./Loader_work.module.css";

const Loader_work = () => (
  <div>
    <div className={styles["ui-loader"] + styles["loader-blk"]}>
      <svg viewBox="22 22 44 44" className="multiColor-loader">
        <circle
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          strokeWidth="3.6"
          className="loader-circle loader-circle-animation"
        ></circle>
      </svg>
    </div>
  </div>
);

export default Loader_work;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_work = () => (
         <div>
          <div className="ui-loader loader-blk">
    <svg viewBox="22 22 44 44" className="multiColor-loader">
        <circle cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6" className="loader-circle loader-circle-animation"></circle>
    </svg>
</div>
        </div>
        );

        export default Loader_work;
        
        
         */
}
