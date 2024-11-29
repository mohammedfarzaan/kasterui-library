import React from "react";
import styles from "./Card_hand.module.css";

const Card_hand = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["img"]}></div>
      <div className={styles["textBox"]}>
        <div className={styles["textContent"]}>
          <p className={styles["h1"]}>Clans of Clash</p>
          <span className={styles["span"]}>12 min ago</span>
        </div>
        <p className={styles["p"]}>Xhattmahs is not attacking your base!</p>
        <div></div>
      </div>
    </div>
  </div>
);

export default Card_hand;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_hand = () => (
         <div>
          <div className="card">
  <div className="img"></div>
  <div className="textBox">
    <div className="textContent">
      <p className="h1">Clans of Clash</p>
      <span className="span">12 min ago</span>
    </div>
    <p className="p">Xhattmahs is not attacking your base!</p>
  <div>
</div></div></div>
        </div>
        );

        export default Card_hand;
        
        
         */
}
