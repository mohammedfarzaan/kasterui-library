import React from "react";
import styles from "./Loader_bread.module.css";

const Loader_bread = () => (
  <div>
    <div className={styles["blob"]}></div>
  </div>
);

export default Loader_bread;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_bread = () => (
         <div>
          <div className="blob"></div>
        </div>
        );

        export default Loader_bread;
        
        
         */
}
