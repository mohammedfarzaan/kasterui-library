import React from "react";
import styles from "./Loader_might.module.css";

const Loader_might = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["box"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["triangle"]}></div>
    </div>
  </div>
);

export default Loader_might;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_might = () => (
         <div>
          <div className="loader">
  <div className="box"></div>
  <div className="circle"></div>
  <div className="triangle"></div>
</div>
        </div>
        );

        export default Loader_might;
        
        
         */
}
