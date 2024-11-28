import React from "react";
import styles from "./Loader_lose.module.css";

const Loader_lose = () => (
  <div>
    <section className={styles["dots-container"]}>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
    </section>
  </div>
);

export default Loader_lose;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_lose = () => (
         <div>
          <section className="dots-container">
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
</section>
        </div>
        );

        export default Loader_lose;
        
        
         */
}
