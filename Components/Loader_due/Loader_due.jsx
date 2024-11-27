import React from "react";
import styles from "./Loader_due.module.css";

const Loader_due = () => (
  <div>
    <div className={styles["ball"]}></div>
    <div className={styles["shadow"]}></div>
  </div>
);

export default Loader_due;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_due = () => (
         <div>
          <div className="ball"></div>
<div className="shadow"></div>
        </div>
        );

        export default Loader_due;
        
        
         */
}
