import React from "react";
import styles from "./Card_zebra.module.css";

const Card_zebra = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["pentagon1"]}></div>
      <div className={styles["pentagon2"]}></div>
      <div className={styles["pentagon3"]}></div>
      <div className={styles["pentagon4"]}></div>
      <div className={styles["pentagon5"]}></div>
    </div>
  </div>
);

export default Card_zebra;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_zebra = () => (
         <div>
          <div className="card">
  <div className="pentagon1"></div>
  <div className="pentagon2"></div>
  <div className="pentagon3"></div>
  <div className="pentagon4"></div>
  <div className="pentagon5"></div>
</div>
        </div>
        );

        export default Card_zebra;
        
        
         */
}
