import React from "react";
import styles from "./Loader_number.module.css";

const Loader_number = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["form1"]}>
        <div className={styles["square"]}></div>
        <div className={styles["square"]}></div>
      </div>
      <div className={styles["form2"]}>
        <div className={styles["square"]}></div>
        <div className={styles["square"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_number;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_number = () => (
         <div>
          <div className="loader">
  <div className="form1">
    <div className="square"></div>
    <div className="square"></div>
  </div>
  <div className="form2">
    <div className="square"></div>
    <div className="square"></div>
  </div>
</div>
        </div>
        );

        export default Loader_number;
        
        
         */
}
