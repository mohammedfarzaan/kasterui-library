import React from "react";
import styles from "./Loader_color.module.css";

const Loader_color = () => (
  <div>
    <div className={styles["loading"]}>
      <div className={styles["d1"]}></div>
      <div className={styles["d2"]}></div>
    </div>
  </div>
);

export default Loader_color;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_color = () => (
         <div>
          <div className="loading">
    <div className="d1"></div>
    <div className="d2"></div>
</div>
        </div>
        );

        export default Loader_color;
        
        
         */
}
