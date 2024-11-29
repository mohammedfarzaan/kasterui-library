import React from "react";
import styles from "./Card_smoke.module.css";

const Card_smoke = () => (
  <div>
    <div className={styles["book"]}>
      <p>Hello</p>
      <div className={styles["cover"]}>
        <p>Hover Me</p>
      </div>
    </div>
  </div>
);

export default Card_smoke;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_smoke = () => (
         <div>
          <div className="book">
    <p>Hello</p>
    <div className="cover">
        <p>Hover Me</p>
    </div>
   </div>
        </div>
        );

        export default Card_smoke;
        
        
         */
}
