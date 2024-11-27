import React from "react";
import styles from "./Loader_toy.module.css";

const Loader_toy = () => (
  <div>
    <div className={styles["phone"]}>
      <span className={styles["loader"]}></span>
      <span className={styles["text"]}>Loading...</span>
    </div>
  </div>
);

export default Loader_toy;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_toy = () => (
         <div>
          <div className="phone">
  <span className="loader"></span>
  <span className="text">Loading...</span>
</div>
        </div>
        );

        export default Loader_toy;
        
        
         */
}
