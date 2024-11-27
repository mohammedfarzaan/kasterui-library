import React from "react";
import styles from "./Loader_house.module.css";

const Loader_house = () => (
  <div>
    <div className={styles["loader"]}>
      <i></i>
    </div>
  </div>
);

export default Loader_house;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_house = () => (
         <div>
          <div className="loader"><i></i></div>
        </div>
        );

        export default Loader_house;
        
        
         */
}
