import React from "react";
import styles from "./Loader_price.module.css";

const Loader_price = () => (
  <div>
    <div className={styles["loader"]}>
      <p className={styles["text"]}>loading...</p>
    </div>
  </div>
);

export default Loader_price;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_price = () => (
         <div>
          <div className="loader">
  <p className="text">
    loading...
  </p>
</div>
        </div>
        );

        export default Loader_price;
        
        
         */
}
