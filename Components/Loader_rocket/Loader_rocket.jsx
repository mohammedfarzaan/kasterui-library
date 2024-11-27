import React from "react";
import styles from "./Loader_rocket.module.css";

const Loader_rocket = () => (
  <div>
    <div className={styles["loader"]}>
      <div
        className={styles["loader_cube"] + styles["loader_cube--color"]}
      ></div>
      <div
        className={styles["loader_cube"] + styles["loader_cube--glowing"]}
      ></div>
    </div>
  </div>
);

export default Loader_rocket;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_rocket = () => (
         <div>
          <div className="loader">
  <div className="loader_cube loader_cube--color"></div>
   <div className="loader_cube loader_cube--glowing"></div>
</div>
        </div>
        );

        export default Loader_rocket;
        
        
         */
}
