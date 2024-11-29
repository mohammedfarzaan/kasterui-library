import React from "react";
import styles from "./Card_circus.module.css";

const Card_circus = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card2"]}></div>
    </div>
  </div>
);

export default Card_circus;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_circus = () => (
         <div>
          <div className="card">
  <div className="card2">
  </div>
</div>
        </div>
        );

        export default Card_circus;
        
        
         */
}
