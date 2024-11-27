import React from "react";
import styles from "./Loader_stock.module.css";

const Loader_stock = () => (
  <div>
    <div className={styles["wrapper"]}>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["shadow"]}></div>
      <div className={styles["shadow"]}></div>
      <div className={styles["shadow"]}></div>
    </div>
  </div>
);

export default Loader_stock;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_stock = () => (
         <div>
          <div className="wrapper">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
</div>
        </div>
        );

        export default Loader_stock;
        
        
         */
}
