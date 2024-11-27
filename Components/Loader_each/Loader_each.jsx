import React from "react";
import styles from "./Loader_each.module.css";

const Loader_each = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["half"]}></div>
      <div className={styles["half"]}></div>
    </div>
  </div>
);

export default Loader_each;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_each = () => (
         <div>
          <div className="container">
  <div className="half"></div>
  <div className="half"></div>
</div>
        </div>
        );

        export default Loader_each;
        
        
         */
}
