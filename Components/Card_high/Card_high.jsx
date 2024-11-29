import React from "react";
import styles from "./Card_high.module.css";

const Card_high = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["header"]}></div>
      <div className={styles["info"]}>
        <p className={styles["title"]}>How to make this material card ?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi.{" "}
        </p>
      </div>
      <div className={styles["footer"]}>
        <p className={styles["tag"]}>#HTML #CSS </p>
        <button type="button" className={styles["action"]}>
          Get started{" "}
        </button>
      </div>
    </div>
  </div>
);

export default Card_high;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_high = () => (
         <div>
          <div className="card">
<div className="header"></div>
<div className="info">
  <p className="title">How to make this material card ?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi. </p>
</div>
<div className="footer">
  <p className="tag">#HTML #CSS </p>
  <button type="button" className="action">Get started </button>
</div>
</div>
        </div>
        );

        export default Card_high;
        
        
         */
}
