import React from "react";
import styles from "./Button_force.module.css";

const Button_force = () => (
  <div>
    <nav className={styles["menu"]}>
      <input
        type="checkbox"
        href="#"
        className={styles["menu-open"]}
        name="menu-open"
        id="menu-open"
      />
      <label className={styles["menu-open-button"]} for="menu-open">
        <span className={styles["lines"] + styles["line-1"]}></span>
        <span className={styles["lines"] + styles["line-2"]}></span>
        <span className={styles["lines"] + styles["line-3"]}></span>
      </label>

      <a href="#" className={styles["menu-item"] + styles["blue"]}>
        {" "}
        <i className={styles["fa"] + styles["fa-anchor"]}></i>{" "}
      </a>
      <a href="#" className={styles["menu-item"] + styles["green"]}>
        {" "}
        <i className={styles["fa"] + styles["fa-coffee"]}></i>{" "}
      </a>
      <a href="#" className={styles["menu-item"] + styles["red"]}>
        {" "}
        <i className={styles["fa"] + styles["fa-heart"]}></i>{" "}
      </a>
      <a href="#" className={styles["menu-item"] + styles["purple"]}>
        {" "}
        <i className={styles["fa"] + styles["fa-microphone"]}></i>{" "}
      </a>
      <a href="#" className={styles["menu-item"] + styles["orange"]}>
        {" "}
        <i className={styles["fa"] + styles["fa-star"]}></i>{" "}
      </a>
      <a href="#" className={styles["menu-item"] + styles["lightblue"]}>
        {" "}
        <i className={styles["fa"] + styles["fa-diamond"]}></i>{" "}
      </a>
    </nav>
  </div>
);

export default Button_force;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_force = () => (
         <div>
          <nav className="menu">
   <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
   <label className="menu-open-button" for="menu-open">
    <span className="lines line-1"></span>
    <span className="lines line-2"></span>
    <span className="lines line-3"></span>
  </label>

   <a href="#" className="menu-item blue"> <i className="fa fa-anchor"></i> </a>
   <a href="#" className="menu-item green"> <i className="fa fa-coffee"></i> </a>
   <a href="#" className="menu-item red"> <i className="fa fa-heart"></i> </a>
   <a href="#" className="menu-item purple"> <i className="fa fa-microphone"></i> </a>
   <a href="#" className="menu-item orange"> <i className="fa fa-star"></i> </a>
   <a href="#" className="menu-item lightblue"> <i className="fa fa-diamond"></i> </a>
</nav>
        </div>
        );

        export default Button_force;
        
        
         */
}
