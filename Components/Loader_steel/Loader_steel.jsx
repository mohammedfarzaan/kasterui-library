import React from "react";
import styles from "./Loader_steel.module.css";

const Loader_steel = () => (
  <div>
    <div className={styles["custom-loader"]}></div>
  </div>
);

export default Loader_steel;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_steel = () => (
         <div>
          <div className="custom-loader"></div>
        </div>
        );

        export default Loader_steel;
        
        
         */
}
