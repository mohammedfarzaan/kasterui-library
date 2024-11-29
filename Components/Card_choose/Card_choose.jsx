import React from "react";
import styles from "./Card_choose.module.css";

const Card_choose = () => (
  <div>
    <section className={styles["product-container"] + styles["product-1"]}>
      <div className={styles["card"]}>
        <div className={styles["photo"]}></div>
        <div className={styles["content"]}>
          <div className={styles["title"]}>GeForce RTX 4090</div>
          <div className={styles["bg-title"]}>RTX</div>
          <div className={styles["feature"] + styles["size"]}>
            <div>size :</div>
            <span>S</span>
            <span>M</span>
            <span>L</span>
          </div>
          <div className={styles["feature"] + styles["color"]}>
            <div>color :</div>
            <span>pink</span>
            <span className={styles["tt"]}>blue</span>
            <span className={styles["ttt"]}>green</span>
          </div>
          <button className={styles["btn-buy"]}>buy now</button>
        </div>
      </div>
    </section>
  </div>
);

export default Card_choose;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_choose = () => (
         <div>
          <section className="product-container product-1">
      <div className="card">
        <div className="photo"></div>
        <div className="content">
          <div className="title">GeForce RTX 4090</div>
          <div className="bg-title">RTX</div>
          <div className="feature size">
            <div>size :</div>
            <span>S</span>
            <span>M</span>
            <span>L</span>
          </div>
          <div className="feature color">
            <div>color :</div>
            <span>pink</span>
            <span className="tt">blue</span>
            <span className="ttt">green</span>
          </div>
          <button className="btn-buy">buy now</button>
        </div>
      </div>
    </section>
        </div>
        );

        export default Card_choose;
        
        
         */
}
