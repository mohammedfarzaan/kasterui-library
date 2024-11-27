import React from "react";
import styles from "./Loader_inch.module.css";

const Loader_inch = () => (
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

export default Loader_inch;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_inch = () => (
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

        export default Loader_inch;
        
        
         */
}
