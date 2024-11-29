import React from "react";
import styles from "./Loader_news.module.css";

const Loader_news = () => (
  <div>
    <div className={styles["ball"]}></div>
    <div className={styles["shape"]}></div>
  </div>
);

export default Loader_news;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_news = () => (
         <div>
          <div className="ball"></div>
<div className="shape"></div>
        </div>
        );

        export default Loader_news;
        
        
         */
}
