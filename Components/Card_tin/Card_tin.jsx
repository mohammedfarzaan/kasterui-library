import React from "react";
import styles from "./Card_tin.module.css";

const Card_tin = () => (
  <div>
    <div id="content">
      <div id="blurer"></div>
      <div className={styles["blob"]}></div>
      <div className={styles["blob"]}></div>
      <div className={styles["blob"]}></div>
      <div className={styles["blob"]}></div>
      <div id="article"></div>
    </div>
  </div>
);

export default Card_tin;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_tin = () => (
         <div>
          <div id="content">
  <div id="blurer"></div>
  <div className="blob"></div>
  <div className="blob"></div>
  <div className="blob"></div>
  <div className="blob"></div>
  <div id="article"></div>
</div>
        </div>
        );

        export default Card_tin;
        
        
         */
}
