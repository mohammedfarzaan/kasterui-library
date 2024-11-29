import React from "react";
import styles from "./Card_frog.module.css";

const Card_frog = () => (
  <div>
    <div className={styles["card"]}>
      <span className={styles["card_title"]}>Loading users</span>
      <div className={styles["loader"]}></div>
      <div className={styles["card_content"]}>
        <button className={styles["load-more"]} name="load-more" type="button">
          Load more
        </button>
      </div>
    </div>
  </div>
);

export default Card_frog;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_frog = () => (
         <div>
          <div className="card">
  <span className="card_title">Loading users</span>
  <div className="loader"></div>
  <div className="card_content">
    <button className="load-more" name="load-more" type="button">Load more</button>
  </div>
</div>
        </div>
        );

        export default Card_frog;
        
        
         */
}
