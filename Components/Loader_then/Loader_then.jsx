import React from "react";
import styles from "./Loader_then.module.css";

const Loader_then = () => (
  <div>
    <div className={styles["eye"]}>
      <div className={styles["up"]}></div>
      <div className={styles["mid"]}></div>
      <div className={styles["down"]}></div>
    </div>
  </div>
);

export default Loader_then;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_then = () => (
         <div>
          <div className="eye">
    <div className="up"></div>
    <div className="mid"></div> 
    <div className="down"></div> 
</div>
        </div>
        );

        export default Loader_then;
        
        
         */
}
