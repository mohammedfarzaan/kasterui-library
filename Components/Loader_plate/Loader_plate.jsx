import React from "react";
import styles from "./Loader_plate.module.css";

const Loader_plate = () => (
  <div>
    <div className={styles["neomorph-spinner"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader_plate;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_plate = () => (
         <div>
          <div className="neomorph-spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
        </div>
        );

        export default Loader_plate;
        
        
         */
}
