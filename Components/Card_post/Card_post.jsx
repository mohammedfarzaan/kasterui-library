import React from "react";
import styles from "./Card_post.module.css";

const Card_post = () => (
  <div>
    <div className={styles["card"]}>
      <span></span>
      <div className={styles["content"]}>Hover Me : )</div>
    </div>
  </div>
);

export default Card_post;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_post = () => (
         <div>
          <div className="card">
   <span></span>
            <div className="content">Hover Me : )</div>
        </div>
        </div>
        );

        export default Card_post;
        
        
         */
}
