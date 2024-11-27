import React from "react";
import styles from "./Loader_card.module.css";

const Loader_card = () => (
  <div>
    <div className={styles["loader-wrapper"]}>
      <div className={styles["packman"]}></div>
      <div className={styles["dots"]}>
        <div className={styles["dot"]}></div>
        <div className={styles["dot"]}></div>
        <div className={styles["dot"]}></div>
        <div className={styles["dot"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_card;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_card = () => (
         <div>
          <div className="loader-wrapper">
  <div className="packman"></div>
  <div className="dots">
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </div>
</div>
        </div>
        );

        export default Loader_card;
        
        
         */
}
