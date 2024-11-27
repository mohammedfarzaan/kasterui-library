import React from "react";
import styles from "./Loader_hello.module.css";

const Loader_hello = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["conic_back1"]}></div>
      <div className={styles["conic_back2"]}></div>
    </div>
  </div>
);

export default Loader_hello;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_hello = () => (
         <div>
          <div className="card">
  <div className="conic_back1"></div>
  <div className="conic_back2"></div>
</div>
        </div>
        );

        export default Loader_hello;
        
        
         */
}
