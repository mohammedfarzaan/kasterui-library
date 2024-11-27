import React from "react";
import styles from "./Loader_seen.module.css";

const Loader_seen = () => (
  <div>
    <div className={styles["custom-loader"]}></div>
  </div>
);

export default Loader_seen;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_seen = () => (
         <div>
          <div className="custom-loader"></div>
        </div>
        );

        export default Loader_seen;
        
        
         */
}
