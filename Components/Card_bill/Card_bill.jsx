import React from "react";
import styles from "./Card_bill.module.css";

const Card_bill = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["header"]}>
        <div>
          <a className={styles["title"]} href="#">
            Building a SaaS product as a software developer
          </a>
          <p className={styles["name"]}>By John Doe</p>
        </div>
        <span className={styles["image"]}></span>
      </div>
      <p className={styles["description"]}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
        provident a, ipsa maiores deleniti consectetur nobis et eaque.
      </p>
      <dl className={styles["post-info"]}>
        <div className={styles["cr"]}>
          <dt className={styles["dt"]}>Published</dt>
          <dd className={styles["dd"]}>31st June, 2021</dd>
        </div>
        <div className={styles["cr"]}>
          <dt className={styles["dt"]}>Reading time</dt>
          <dd className={styles["dd"]}>3 minute</dd>
        </div>
      </dl>
    </div>
  </div>
);

export default Card_bill;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_bill = () => (
         <div>
          <div className="card">
  <div className="header">
    <div>
      <a className="title" href="#">
        Building a SaaS product as a software developer
      </a>
      <p className="name">By John Doe</p>
    </div>
      <span className="image"></span>
  </div>
    <p className="description">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
      provident a, ipsa maiores deleniti consectetur nobis et eaque.
    </p>
  <dl className="post-info">
    <div className="cr">
      <dt className="dt">Published</dt>
      <dd className="dd">31st June, 2021</dd>
    </div>
    <div className="cr">
      <dt className="dt">Reading time</dt>
      <dd className="dd">3 minute</dd>
    </div>
  </dl>
</div>
        </div>
        );

        export default Card_bill;
        
        
         */
}
