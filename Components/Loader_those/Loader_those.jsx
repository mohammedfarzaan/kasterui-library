import React from "react";
import styles from "./Loader_those.module.css";

const Loader_those = () => (
  <div>
    <div className={styles["spinner"]}></div>
  </div>
);

export default Loader_those;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_those = () => (
         <div>
          <div className="spinner"></div>
        </div>
        );

        export default Loader_those;
        
        
         */
}
