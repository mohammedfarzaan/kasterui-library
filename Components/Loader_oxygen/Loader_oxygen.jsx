import React from "react";
import styles from "./Loader_oxygen.module.css";

const Loader_oxygen = () => (
  <div>
    <div className={styles["lds-ellipsis"]}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader_oxygen;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_oxygen = () => (
         <div>
          <div className="lds-ellipsis"><div></div><div></div><div></div></div>
        </div>
        );

        export default Loader_oxygen;
        
        
         */
}
