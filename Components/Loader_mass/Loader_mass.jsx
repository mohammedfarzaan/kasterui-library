import React from "react";
import styles from "./Loader_mass.module.css";

const Loader_mass = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["container"]}>
        <div className={styles["coffee-header"]}>
          <div
            className={
              styles["coffee-header__buttons"] +
              styles["coffee-header__button-one"]
            }
          ></div>
          <div
            className={
              styles["coffee-header__buttons"] +
              styles["coffee-header__button-two"]
            }
          ></div>
          <div className={styles["coffee-header__display"]}></div>
          <div className={styles["coffee-header__details"]}></div>
        </div>
        <div className={styles["coffee-medium"]}>
          <div className={styles["coffe-medium__exit"]}></div>
          <div className={styles["coffee-medium__arm"]}></div>
          <div className={styles["coffee-medium__liquid"]}></div>
          <div
            className={
              styles["coffee-medium__smoke"] +
              styles["coffee-medium__smoke-one"]
            }
          ></div>
          <div
            className={
              styles["coffee-medium__smoke"] +
              styles["coffee-medium__smoke-two"]
            }
          ></div>
          <div
            className={
              styles["coffee-medium__smoke"] +
              styles["coffee-medium__smoke-three"]
            }
          ></div>
          <div
            className={
              styles["coffee-medium__smoke"] +
              styles["coffee-medium__smoke-for"]
            }
          ></div>
          <div className={styles["coffee-medium__cup"]}></div>
        </div>
        <div className={styles["coffee-footer"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_mass;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_mass = () => (
         <div>
          <div className="loader">
      <div className="container">
      <div className="coffee-header">
        <div className="coffee-header__buttons coffee-header__button-one"></div>
        <div className="coffee-header__buttons coffee-header__button-two"></div>
        <div className="coffee-header__display"></div>
        <div className="coffee-header__details"></div>
      </div>
      <div className="coffee-medium">
        <div className="coffe-medium__exit"></div>
        <div className="coffee-medium__arm"></div>
        <div className="coffee-medium__liquid"></div>
        <div className="coffee-medium__smoke coffee-medium__smoke-one"></div>
        <div className="coffee-medium__smoke coffee-medium__smoke-two"></div>
        <div className="coffee-medium__smoke coffee-medium__smoke-three"></div>
        <div className="coffee-medium__smoke coffee-medium__smoke-for"></div>
        <div className="coffee-medium__cup"></div>
      </div>
      <div className="coffee-footer"></div>
    </div>
   </div>
        </div>
        );

        export default Loader_mass;
        
        
         */
}
