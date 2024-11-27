import React from "react";
import styles from "./Loader_rule.module.css";

const Loader_rule = () => (
  <div>
    <div className={styles["loader"]}>loading...</div>
  </div>
);

export default Loader_rule;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_rule = () => (
         <div>
          <div className="loader">loading...</div>
        </div>
        );

        export default Loader_rule;
        
        
         */
}
