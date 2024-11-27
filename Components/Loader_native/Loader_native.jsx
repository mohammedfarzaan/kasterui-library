import React from "react";
import styles from "./Loader_native.module.css";

const Loader_native = () => (
  <div>
    <button className={styles["loader__btn"]}>
      <div className={styles["loader"]}></div>
      Loading ...
    </button>
  </div>
);

export default Loader_native;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_native = () => (
         <div>
          <button className="loader__btn">
  <div className="loader"></div>
  Loading ...
</button>
        </div>
        );

        export default Loader_native;
        
        
         */
}
