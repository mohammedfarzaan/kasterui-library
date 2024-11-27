import React from "react";
import styles from "./Loader_some.module.css";

const Loader_some = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["pencil"]}>
        <p>Loading...</p>
        <div className={styles["top"]}></div>
      </div>
      <div className={styles["stroke"]}></div>
    </div>
  </div>
);

export default Loader_some;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_some = () => (
         <div>
          <div className="loader">
        <div className="pencil">
            <p>Loading...</p>
            <div className="top"></div>
        </div>
        <div className="stroke">
        </div>
    </div>
        </div>
        );

        export default Loader_some;
        
        
         */
}
