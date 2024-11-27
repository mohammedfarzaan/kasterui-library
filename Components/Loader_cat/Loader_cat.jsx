import React from "react";
import styles from "./Loader_cat.module.css";

const Loader_cat = () => (
  <div>
    <div className={styles["ball"]}></div>
    <div className={styles["shape"]}></div>
  </div>
);

export default Loader_cat;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_cat = () => (
         <div>
          <div className="ball"></div>
<div className="shape"></div>
        </div>
        );

        export default Loader_cat;
        
        
         */
}
