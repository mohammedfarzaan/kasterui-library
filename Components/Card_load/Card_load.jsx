import React from "react";
import styles from "./Card_load.module.css";

const Card_load = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["smallIcon"]}>
        <div className={styles["Icon"]}></div>
        <div className={styles["Name"]}></div>
        <div className={styles["Roles"]}></div>
        <div className={styles["Descripion"]}></div>
      </div>
    </div>
  </div>
);

export default Card_load;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_load = () => (
         <div>
          <div className="card">
  <div className="smallIcon">
    <div className="Icon"></div>
    <div className="Name"></div>
    <div className="Roles"></div>
    <div className="Descripion"></div>
  </div>
</div>
        </div>
        );

        export default Card_load;
        
        
         */
}
