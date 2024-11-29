import React from "react";
import styles from "./Card_this.module.css";

const Card_this = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-content-wrapper"]}>
        <div className={styles["card-title"]}>Free plan</div>
        <div className={styles["card-price"]}>
          <span>$</span>0<span>/month</span>
        </div>
        <div className={styles["card-subtitle"]}>Benefits:</div>
        <ul className={styles["card-benefits"]}>
          <li>Lorem ipsum, dolor sit amet</li>
          <li>Lorem ipsum, dolor sit amet</li>
        </ul>
      </div>
      <button className={styles["card-btn"]}>More info</button>
    </div>
  </div>
);

export default Card_this;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_this = () => (
         <div>
          <div className="card">
	<div className="card-content-wrapper">
		<div className="card-title">Free plan</div>
		<div className="card-price">
			<span>$</span>
			0
			<span>/month</span>
		</div>
		<div className="card-subtitle">Benefits:</div>
		<ul className="card-benefits">
				<li>Lorem ipsum, dolor sit amet</li>
				<li>Lorem ipsum, dolor sit amet</li>
		</ul>
	</div>
	<button className="card-btn">More info</button>
</div>
        </div>
        );

        export default Card_this;
        
        
         */
}
