import React from "react";
import styles from "./Loader_her.module.css";

const Loader_her = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["shape"]}></div>
    </div>
  </div>
);

export default Loader_her;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_her = () => (
         <div>
          <div className="loader">     
         <div className="shape"></div>
  </div>
        </div>
        );

        export default Loader_her;
        
        
         */
}
