import React from "react";
import styles from "./Card_palace.module.css";

const Card_palace = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["imgbox"]}>
        <div className={styles["img"]}></div>
      </div>
      <div className={styles["details"]}>
        <h2 className={styles["title"]}>John Doe</h2>
        <span className={styles["caption"]}>Developer</span>
      </div>
    </div>
  </div>
);

export default Card_palace;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_palace = () => (
         <div>
          <div className="card">
    <div className="imgbox">
        <div className="img"></div>
    </div>
    <div className="details">
        <h2 className="title">John Doe</h2>
        <span className="caption">Developer</span>
    </div>
</div>
        </div>
        );

        export default Card_palace;
        
        
         */
}
