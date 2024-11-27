import React from "react";
import styles from "./Loader_mind.module.css";

const Loader_mind = () => (
  <div>
    <div className={styles["loader"]}>LOADING</div>
  </div>
);

export default Loader_mind;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_mind = () => (
         <div>
          <div className="loader">LOADING</div>
        </div>
        );

        export default Loader_mind;
        
        
         */
}
