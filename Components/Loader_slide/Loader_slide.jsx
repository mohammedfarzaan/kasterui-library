import React from "react";
import styles from "./Loader_slide.module.css";

const Loader_slide = () => (
  <div>
    <div className={styles["lds-hourglass"]}></div>
  </div>
);

export default Loader_slide;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_slide = () => (
         <div>
          <div className="lds-hourglass"></div>
        </div>
        );

        export default Loader_slide;
        
        
         */
}
