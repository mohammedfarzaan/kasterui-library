import React from "react";
import styles from "./Loader_firm.module.css";

const Loader_firm = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["text"]}>LOADING</div>
        <div className={styles["box"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_firm;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_firm = () => (
         <div>
          <div className="loader">
  <div className="wrapper">
    <div className="text">LOADING</div>
    <div className="box"></div>
  </div>
</div>
        </div>
        );

        export default Loader_firm;
        
        
         */
}
