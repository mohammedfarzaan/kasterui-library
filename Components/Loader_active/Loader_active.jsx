import React from "react";
import styles from "./Loader_active.module.css";

const Loader_active = () => (
  <div>
    <div className={styles["loader"]}></div>
  </div>
);

export default Loader_active;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_active = () => (
         <div>
          <div className="loader"></div>
        </div>
        );

        export default Loader_active;
        
        
         */
}
