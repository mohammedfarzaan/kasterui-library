import React from "react";
import styles from "./Loader_tax.module.css";

const Loader_tax = () => (
  <div>
    <div className={styles["spinner"]}>
      <div className={styles["spinner1"]}></div>
    </div>
  </div>
);

export default Loader_tax;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_tax = () => (
         <div>
          <div className="spinner">
    <div className="spinner1"></div>
</div>
        </div>
        );

        export default Loader_tax;
        
        
         */
}
