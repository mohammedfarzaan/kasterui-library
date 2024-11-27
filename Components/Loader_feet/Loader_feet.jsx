import React from "react";
import styles from "./Loader_feet.module.css";

const Loader_feet = () => (
  <div>
    <div className={styles["textWrapper"]}>
      <p className={styles["text"]}>Loading...</p>
      <div className={styles["invertbox"]}></div>
    </div>
  </div>
);

export default Loader_feet;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_feet = () => (
         <div>
          <div className="textWrapper">
  <p className="text">Loading...</p>
  <div className="invertbox"></div>
</div>
        </div>
        );

        export default Loader_feet;
        
        
         */
}
