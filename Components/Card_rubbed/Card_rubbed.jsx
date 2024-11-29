import React from "react";
import styles from "./Card_rubbed.module.css";

const Card_rubbed = () => (
  <div>
    <div className={styles["firstAnimation"]}>
      <div className={styles["secondAnimation"]}>
        <div className={styles["card"]}></div>
      </div>
    </div>
  </div>
);

export default Card_rubbed;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_rubbed = () => (
         <div>
          <div className="firstAnimation">
    <div className="secondAnimation">
        <div className="card">
        </div>
    </div>
</div>
        </div>
        );

        export default Card_rubbed;
        
        
         */
}
