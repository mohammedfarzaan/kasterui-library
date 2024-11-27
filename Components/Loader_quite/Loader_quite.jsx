import React from "react";
import styles from "./Loader_quite.module.css";

const Loader_quite = () => (
  <div>
    <div className={styles["loader"]}>Loading...</div>
  </div>
);

export default Loader_quite;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_quite = () => (
         <div>
          <div className="loader">Loading...</div>
        </div>
        );

        export default Loader_quite;
        
        
         */
}
