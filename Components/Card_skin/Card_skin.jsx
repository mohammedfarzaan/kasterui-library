import React from "react";
import styles from "./Card_skin.module.css";

const Card_skin = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["cloud"]}></div>
      <div className={styles["shadow"]}></div>
    </div>
  </div>
);

export default Card_skin;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_skin = () => (
         <div>
          <div className="card">
<div className="cloud">
</div>
<div className="shadow"></div>
</div>
        </div>
        );

        export default Card_skin;
        
        
         */
}
