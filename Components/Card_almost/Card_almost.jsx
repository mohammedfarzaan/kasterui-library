import React from "react";
import styles from "./Card_almost.module.css";

const Card_almost = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["content"]}>
        <div className={styles["title"]}>Personal edition</div>
        <div className={styles["price"]}>$39.99</div>
        <div className={styles["description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at
          posuere eros. Interdum et malesuada fames ac ante ipsum primis in
          faucibus.
        </div>
      </div>
      <button>Buy now</button>
    </div>
  </div>
);

export default Card_almost;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_almost = () => (
         <div>
          <div className="card">
      <div className="content">
        <div className="title">Personal edition</div>
        <div className="price">$39.99</div>
        <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
      </div>
        <button>
          Buy now
        </button>
  </div>
        </div>
        );

        export default Card_almost;
        
        
         */
}
