import React from "react";
import styles from "./Loader_oldest.module.css";

const Loader_oldest = () => (
  <div>
    <div className={styles["loader"]}>
      <div id="first">
        <div id="second">
          <div id="third"></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_oldest;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_oldest = () => (
         <div>
          <div className="loader">
    <div id="first">
        <div id="second">
            <div id="third">
            </div>
        </div>
    </div>
</div>
        </div>
        );

        export default Loader_oldest;
        
        
         */
}
