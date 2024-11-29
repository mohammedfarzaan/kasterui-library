import React from "react";
import styles from "./Card_tower.module.css";

const Card_tower = () => (
  <div>
    <div className={styles["main"]}>
      <div className={styles["card"]}>
        <div className={styles["card-content"]}>
          <div className={styles["h3"]}>
            <span>UI</span>VERSE
          </div>
          <div className={styles["h1"]}>Love to Code.</div>
          <p className={styles["p"]}>
            Love to spend hours in codeing and get lost in own fantasy world of
            code, the feeling 😂🚀😊{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Card_tower;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_tower = () => (
         <div>
          <div className="main">
<div className="card">
  <div className="card-content">
    <div className="h3"><span>UI</span>VERSE</div>
    <div className="h1">Love to Code.</div>
    <p className="p">Love to spend hours in codeing and get lost in own fantasy world of code, the feeling 😂🚀😊 </p>
  </div>
</div>
</div>
        </div>
        );

        export default Card_tower;
        
        
         */
}
