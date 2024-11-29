import React from "react";
import styles from "./Loader_book.module.css";

const Loader_book = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["box-1"]}></div>
      <div className={styles["box-2"]}></div>
      <div className={styles["box-3"]}></div>
    </div>
  </div>
);

export default Loader_book;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_book = () => (
         <div>
          <div className="loader">
  <div className="box-1"></div>
  <div className="box-2"></div>
  <div className="box-3"></div>
</div>
        </div>
        );

        export default Loader_book;
        
        
         */
}
