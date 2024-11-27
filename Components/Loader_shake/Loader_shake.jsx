import React from "react";
import styles from "./Loader_shake.module.css";

const Loader_shake = () => (
  <div>
    <span className={styles["loader"]}></span>
  </div>
);

export default Loader_shake;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_shake = () => (
         <div>
          <span className="loader"></span>
        </div>
        );

        export default Loader_shake;
        
        
         */
}
