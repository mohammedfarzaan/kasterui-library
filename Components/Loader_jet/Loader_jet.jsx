import React from "react";
import styles from "./Loader_jet.module.css";

const Loader_jet = () => (
  <div>
    <div className={styles["loaderBar"]}></div>
  </div>
);

export default Loader_jet;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_jet = () => (
         <div>
          <div className="loaderBar"></div>
        </div>
        );

        export default Loader_jet;
        
        
         */
}
