import React from "react";
import styles from "./Loader_save.module.css";

const Loader_save = () => (
  <div>
    <div className={styles["div"]}>
      <p id="h2">
        Loading....<span id="lol"></span>
      </p>
    </div>
  </div>
);

export default Loader_save;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_save = () => (
         <div>
          <div className="div">
  <p id="h2">Loading....<span id="lol"></span></p>
</div>
        </div>
        );

        export default Loader_save;
        
        
         */
}
