import React from "react";
import styles from "./Loader_buried.module.css";

const Loader_buried = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["block"] + styles["b_1"]}></div>
      <div className={styles["block"] + styles["b_2"]}></div>
      <div className={styles["block"] + styles["b_3"]}></div>
      <div className={styles["block"] + styles["b_4"]}></div>
      <div className={styles["block"] + styles["b_5"]}></div>
      <div className={styles["block"] + styles["b_6"]}></div>
      <div className={styles["block"] + styles["b_7"]}></div>
      <div className={styles["block"] + styles["b_8"]}></div>
    </div>
  </div>
);

export default Loader_buried;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_buried = () => (
         <div>
          <div className="loader">
  <div className="block b_1"></div>
  <div className="block b_2"></div>
  <div className="block b_3"></div>
  <div className="block b_4"></div>
  <div className="block b_5"></div>
  <div className="block b_6"></div>
  <div className="block b_7"></div>
  <div className="block b_8"></div>
</div>
        </div>
        );

        export default Loader_buried;
        
        
         */
}
