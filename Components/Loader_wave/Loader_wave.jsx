import React from "react";
import styles from "./Loader_wave.module.css";

const Loader_wave = () => (
  <div>
    <div className={styles["lds-roller"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader_wave;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_wave = () => (
         <div>
          <div className="lds-roller"><div></div><div></div><div></div><div></div></div>
        </div>
        );

        export default Loader_wave;
        
        
         */
}
