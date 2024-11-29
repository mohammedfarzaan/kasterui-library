import React from "react";
import styles from "./Button_giant.module.css";

const Button_giant = () => (
  <div>
    <nav className={styles["menu"]}>
      <input
        id="menu-open"
        name="menu-open"
        className={styles["menu-open"]}
        href="#"
        type="checkbox"
      />
      <label for="menu-open" className={styles["menu-open-button"]}>
        <span className={styles["lines"] + styles["line-1"]}></span>
        <span className={styles["lines"] + styles["line-2"]}></span>
        <span className={styles["lines"] + styles["line-3"]}></span>
      </label>

      <a className={styles["menu-item"] + styles["blue"]} href="#">
        {" "}
        <i className={styles["fa"] + styles["fa-anchor"]}></i>{" "}
      </a>
      <a className={styles["menu-item"] + styles["green"]} href="#">
        {" "}
        <i className={styles["fa"] + styles["fa-coffee"]}></i>{" "}
      </a>
      <a className={styles["menu-item"] + styles["red"]} href="#">
        {" "}
        <i className={styles["fa"] + styles["fa-heart"]}></i>{" "}
      </a>
      <a className={styles["menu-item"] + styles["purple"]} href="#">
        {" "}
        <i className={styles["fa"] + styles["fa-microphone"]}></i>{" "}
      </a>
      <a className={styles["menu-item"] + styles["orange"]} href="#">
        {" "}
        <i className={styles["fa"] + styles["fa-star"]}></i>{" "}
      </a>
      <a className={styles["menu-item"] + styles["lightblue"]} href="#">
        {" "}
        <i className={styles["fa"] + styles["fa-diamond"]}></i>{" "}
      </a>
    </nav>
  </div>
);

export default Button_giant;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_giant = () => (
         <div>
          <nav className="menu">
  <input
    id="menu-open"
    name="menu-open"
    className="menu-open"
    href="#"
    type="checkbox"
  />
  <label for="menu-open" className="menu-open-button">
    <span className="lines line-1"></span>
    <span className="lines line-2"></span>
    <span className="lines line-3"></span>
  </label>

  <a className="menu-item blue" href="#"> <i className="fa fa-anchor"></i> </a>
  <a className="menu-item green" href="#"> <i className="fa fa-coffee"></i> </a>
  <a className="menu-item red" href="#"> <i className="fa fa-heart"></i> </a>
  <a className="menu-item purple" href="#"> <i className="fa fa-microphone"></i> </a>
  <a className="menu-item orange" href="#"> <i className="fa fa-star"></i> </a>
  <a className="menu-item lightblue" href="#"> <i className="fa fa-diamond"></i> </a>
</nav>
        </div>
        );

        export default Button_giant;
        
        
         */
}
