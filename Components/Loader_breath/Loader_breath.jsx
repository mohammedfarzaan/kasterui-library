import React from "react";
import styles from "./Loader_breath.module.css";

const Loader_breath = () => (
  <div>
    <div className={styles["glitch"]} data-text="Loading ...">
      Loading ...
    </div>
  </div>
);

export default Loader_breath;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_breath = () => (
         <div>
          <div className="glitch" data-text="Loading ...">Loading ...</div>
        </div>
        );

        export default Loader_breath;
        
        
         */
}
