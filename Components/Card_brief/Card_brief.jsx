import React from "react";
import styles from "./Card_brief.module.css";

const Card_brief = () => (
  <div>
    <div className={styles["card"]}>
      <p className={styles["card-title"]}>Product Name</p>
      <p className={styles["small-desc"]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
        officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
        eum nihil itaque!
      </p>
      <div className={styles["go-corner"]}>
        <div className={styles["go-arrow"]}>→</div>
      </div>
    </div>
  </div>
);

export default Card_brief;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_brief = () => (
         <div>
          <div className="card">
      <p className="card-title">Product Name</p>
      <p className="small-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
        officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
        eum nihil itaque!
      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
        </div>
        );

        export default Card_brief;
        
        
         */
}
