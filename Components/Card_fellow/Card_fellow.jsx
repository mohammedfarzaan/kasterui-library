import React from "react";
import styles from "./Card_fellow.module.css";

const Card_fellow = () => (
  <div>
    <div className={styles["card"]}>
      <p className={styles["title"]}>Standard</p>
      <div className={styles["pricecontainer"]}>
        <p className={styles["price"]}>$2.99</p>
        <p className={styles["pricedescriptor"]}>/month</p>
      </div>
      <p className={styles["includes"]}>This Plan Includes:</p>
      <ul className={styles["benefitlist"]}>
        <li>Awesome Benefits</li>
        <li>10% Discount</li>
      </ul>
      <div className={styles["btncontainer"]}>
        <button>Select This Plan</button>
      </div>
    </div>
  </div>
);

export default Card_fellow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_fellow = () => (
         <div>
          <div className="card">
  <p className="title">Standard</p>
  <div className="pricecontainer">
    <p className="price">$2.99</p>
    <p className="pricedescriptor">/month</p>
  </div>
  <p className="includes">This Plan Includes:</p>
  <ul className="benefitlist">
    <li>Awesome Benefits</li>
    <li>10% Discount</li>
  </ul>
  <div className="btncontainer">
    <button>Select This Plan</button>
  </div>
</div>
        </div>
        );

        export default Card_fellow;
        
        
         */
}
