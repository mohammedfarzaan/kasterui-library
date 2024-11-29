import React from "react";
import styles from "./Card_sent.module.css";

const Card_sent = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__title"]}>table</div>
      <div className={styles["card__data"]}>
        <div className={styles["card__right"]}>
          <div className={styles["item"]}>id</div>
          <div className={styles["item"]}>name</div>
          <div className={styles["item"]}>date</div>
          <div className={styles["item"]}>active</div>
        </div>
        <div className={styles["card__left"]}>
          <div className={styles["item"]}>int</div>
          <div className={styles["item"]}>varchar</div>
          <div className={styles["item"]}>datetime</div>
          <div className={styles["item"]}>boolean</div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_sent;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_sent = () => (
         <div>
          <div className="card">
  <div className="card__title">table</div>
  <div className="card__data">
    <div className="card__right">
      <div className="item">id</div>
      <div className="item">name</div>
      <div className="item">date</div>
      <div className="item">active</div>
    </div>
    <div className="card__left">
      <div className="item">int</div>
      <div className="item">varchar</div>
      <div className="item">datetime</div>
      <div className="item">boolean</div>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_sent;
        
        
         */
}
