import React from "react";
import styles from "./Card_change.module.css";

const Card_change = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["tools"]}>
        <div className={styles["circle"]}>
          <span className={styles["red"] + styles["box"]}></span>
        </div>
        <div className={styles["circle"]}>
          <span className={styles["yellow"] + styles["box"]}></span>
        </div>
        <div className={styles["circle"]}>
          <span className={styles["green"] + styles["box"]}></span>
        </div>
      </div>
      <div className={styles["card__content"]}>
        <p className={styles["title"]}>Title</p>
        <hr />
        <p className={styles["content"]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          pariatur animi praesentium
        </p>
      </div>
    </div>
  </div>
);

export default Card_change;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_change = () => (
         <div>
          <div className="card">
  <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
  <div className="card__content">
    <p className="title">Title</p>
    <hr />
    <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus pariatur animi praesentium
    </p>
  </div>
</div>
        </div>
        );

        export default Card_change;
        
        
         */
}
