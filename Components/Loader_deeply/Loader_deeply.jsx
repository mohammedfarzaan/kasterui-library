import React from "react";
import styles from "./Loader_deeply.module.css";

const Loader_deeply = () => (
  <div>
    <div className={styles["loader"]}>
      <li className={styles["ball"]}></li>
      <li className={styles["ball"]}></li>
      <li className={styles["ball"]}></li>
    </div>
  </div>
);

export default Loader_deeply;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_deeply = () => (
         <div>
          <div className="loader">
  <li className="ball"></li>
  <li className="ball"></li>
  <li className="ball"></li>
</div>
        </div>
        );

        export default Loader_deeply;
        
        
         */
}
