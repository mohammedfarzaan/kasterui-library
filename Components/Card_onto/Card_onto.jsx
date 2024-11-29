import React from "react";
import styles from "./Card_onto.module.css";

const Card_onto = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["header"]}>
        <div className={styles["image"]}>
          <span className={styles["tag"]}>Art</span>
        </div>
        <div className={styles["date"]}>
          <span>6 min ago</span>
        </div>
      </div>
      <div className={styles["info"]}>
        <a rel="noopener noreferrer" href="#" className={styles["block"]}>
          <span className={styles["title"]}>
            Facere ipsa nulla corrupti praesentium{" "}
          </span>
        </a>
        <p className={styles["description"]}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
          excepturi. Lorem ipsum dolor sit ...
        </p>
      </div>
    </div>
  </div>
);

export default Card_onto;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_onto = () => (
         <div>
          <div className="card">
		<div className="header">
			<div className="image">
				<span className="tag">Art</span>
			</div>
			<div className="date">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="info">
			<a rel="noopener noreferrer" href="#" className="block">
				<span className="title">Facere ipsa nulla corrupti praesentium </span>
			</a>
			<p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit ...</p>
		</div>
	</div>
        </div>
        );

        export default Card_onto;
        
        
         */
}
