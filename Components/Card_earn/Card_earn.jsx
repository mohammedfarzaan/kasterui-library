import React from "react";
import styles from "./Card_earn.module.css";

const Card_earn = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["title-1"]}>Card 1</div>
      <div className={styles["content"]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </div>
      <button className={styles["btn"]}>Learn more</button>
      <div className={styles["bar"]}>
        <div className={styles["emptybar"]}></div>
        <div className={styles["filledbar"]}></div>
      </div>
    </div>

    <div className={styles["card"]}>
      <div className={styles["title-1"]}>Card 2</div>
      <div className={styles["content"]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </div>
      <button className={styles["btn"]}>Learn more</button>
      <div className={styles["bar"]}>
        <div className={styles["emptybar"]}></div>
        <div className={styles["filledbar"]}></div>
      </div>
    </div>
  </div>
);

export default Card_earn;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_earn = () => (
         <div>
          <div className="card">
  <div className="title-1">Card 1</div>
  <div className="content">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s.
  </div>
  <button className="btn">Learn more</button>
  <div className="bar">
    <div className="emptybar"></div>
    <div className="filledbar"></div>
  </div>
</div>

<div className="card">
  <div className="title-1">Card 2</div>
  <div className="content">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s.
  </div>
  <button className="btn">Learn more</button>
  <div className="bar">
    <div className="emptybar"></div>
    <div className="filledbar"></div>
  </div>
</div>
        </div>
        );

        export default Card_earn;
        
        
         */
}
