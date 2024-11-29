import React from "react";
import styles from "./Loader_record.module.css";

const Loader_record = () => (
  <div>
    <svg className={styles["loader"]} viewBox="0 0 100 100">
      <circle className={styles["moon"] + styles["moon-back"]}></circle>
      <circle className={styles["planet"]}></circle>
      <circle className={styles["moon"] + styles["moon-front"]}></circle>
    </svg>
  </div>
);

export default Loader_record;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_record = () => (
         <div>
          <svg className="loader" viewBox="0 0 100 100">
    <circle className="moon moon-back"></circle>
    <circle className="planet"></circle>
    <circle className="moon moon-front"></circle>
</svg>
        </div>
        );

        export default Loader_record;
        
        
         */
}
