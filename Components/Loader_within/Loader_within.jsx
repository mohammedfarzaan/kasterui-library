import React from "react";
import styles from "./Loader_within.module.css";

const Loader_within = () => (
  <div>
    <div className={styles["loader"]}>
      <div></div>
    </div>
  </div>
);

export default Loader_within;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_within = () => (
         <div>
          <div className="loader"><div></div></div>
        </div>
        );

        export default Loader_within;
        
        
         */
}
