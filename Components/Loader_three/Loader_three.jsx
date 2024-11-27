import React from "react";
import styles from "./Loader_three.module.css";

const Loader_three = () => (
  <div>
    <span className={styles["loader"]}></span>
  </div>
);

export default Loader_three;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_three = () => (
         <div>
          <span className="loader"></span>
        </div>
        );

        export default Loader_three;
        
        
         */
}
