import React from "react";
import styles from "./Card_team.module.css";

const Card_team = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-img"]}></div>
      <div className={styles["card-info"]}>
        <p className={styles["text-body"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          repellat, consequuntur doloribus voluptate esse iure?
        </p>
        <p className={styles["text-title"]}>Autor</p>
      </div>
    </div>
  </div>
);

export default Card_team;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_team = () => (
         <div>
          <div className="card">
<div className="card-img"></div>
  <div className="card-info">
    <p className="text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?</p>
    <p className="text-title">Autor</p>
  </div>
</div>
        </div>
        );

        export default Card_team;
        
        
         */
}
