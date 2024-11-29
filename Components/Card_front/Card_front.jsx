import React from "react";
import styles from "./Card_front.module.css";

const Card_front = () => (
  <div>
    <div className={styles["card"]}>Click me</div>
  </div>
);

export default Card_front;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_front = () => (
         <div>
          <div className="card">
  Click me
</div>
        </div>
        );

        export default Card_front;
        
        
         */
}
