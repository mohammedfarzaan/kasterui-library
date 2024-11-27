import React from "react";
import styles from "./Loader_prove.module.css";

const Loader_prove = () => (
  <div>
    <div className={styles["loadingspinner"]}>
      <div id="square1"></div>
      <div id="square2"></div>
      <div id="square3"></div>
      <div id="square4"></div>
      <div id="square5"></div>
    </div>
  </div>
);

export default Loader_prove;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_prove = () => (
         <div>
          <div className="loadingspinner">
  <div id="square1"></div>
  <div id="square2"></div>
  <div id="square3"></div>
  <div id="square4"></div>
  <div id="square5"></div>
</div>
        </div>
        );

        export default Loader_prove;
        
        
         */
}
