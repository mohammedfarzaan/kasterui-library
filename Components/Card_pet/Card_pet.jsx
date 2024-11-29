import React from "react";
import styles from "./Card_pet.module.css";

const Card_pet = () => (
  <div>
    <div className={styles["card"]}>
      <div data-text="The Eye of Providence" className={styles["title"]}>
        The Eye of Providence
      </div>
      <div className={styles["eye-of-providence"]}>
        <div className={styles["triangle"]}></div>
        <div className={styles["eye"]}>
          <div className={styles["eyelid"]}></div>
          <div className={styles["iris"]}>
            <div className={styles["pupil"]}></div>
          </div>
        </div>
      </div>
      <div className={styles["spotlight"]}></div>
      <div className={styles["scan-line"]}></div>
      <div className={styles["glitch-text"]}>Always Watching</div>
      <div className={styles["footer-text"]}>Obey. Trust. Consume</div>
    </div>
  </div>
);

export default Card_pet;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_pet = () => (
         <div>
          <div className="card">
  <div data-text="The Eye of Providence" className="title">
    The Eye of Providence
  </div>
  <div className="eye-of-providence">
    <div className="triangle"></div>
    <div className="eye">
      <div className="eyelid"></div>
      <div className="iris">
        <div className="pupil"></div>
      </div>
    </div>
  </div>
  <div className="spotlight"></div>
  <div className="scan-line"></div>
  <div className="glitch-text">Always Watching</div>
  <div className="footer-text">Obey. Trust. Consume</div>
</div>
        </div>
        );

        export default Card_pet;
        
        
         */
}
