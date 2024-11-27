import React from "react";
import styles from "./Loader_steep.module.css";

const Loader_steep = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["cercle"]}></div>
      <div className={styles["cercle"]}></div>
      <div className={styles["cercle"]}></div>
      <div className={styles["cercle"]}></div>
    </div>
  </div>
);

export default Loader_steep;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_steep = () => (
         <div>
          <div className="loader">

  <div className="cercle">
  </div>
  <div className="cercle">
  </div>
  <div className="cercle">
  </div>
  <div className="cercle">
  </div>

</div>
        </div>
        );

        export default Loader_steep;
        
        
         */
}
