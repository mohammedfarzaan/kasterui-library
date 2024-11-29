import React from "react";
import styles from "./Card_idea.module.css";

const Card_idea = () => (
  <div>
    <div className={styles["card"]}>
      <div>
        <p className={styles["Name-9999"]}>Abo</p>
        <p className={styles["Price-9999"]}>10$</p>
        <svg viewBox="0 0 20 20" className={styles["svg-icon"]}>
          <path
            d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
            fill="none"
          ></path>
        </svg>
        <p className={styles["YouGet-9999"]}>lorem-impus</p>
        <svg viewBox="0 0 20 20" className={styles["svg-icon2"]}>
          <path
            d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
            fill="none"
          ></path>
        </svg>
        <p className={styles["Description-9999"]}>lorem-ipsum</p>
      </div>
    </div>
  </div>
);

export default Card_idea;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_idea = () => (
         <div>
          <div className="card">
  <div>
    <p className="Name-9999">Abo</p>
    <p className="Price-9999">10$</p>
    <svg viewBox="0 0 20 20" className="svg-icon">
			<path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" fill="none"></path>
		</svg>
    <p className="YouGet-9999">lorem-impus</p>
    <svg viewBox="0 0 20 20" className="svg-icon2">
							<path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" fill="none"></path>
						</svg>
    <p className="Description-9999">lorem-ipsum</p>
  </div>
</div>
        </div>
        );

        export default Card_idea;
        
        
         */
}
