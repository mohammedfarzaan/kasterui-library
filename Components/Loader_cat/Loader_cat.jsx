import React from "react";
import styles from "./Loader_cat.module.css";

const Loader_cat = () => (
  <div>
    <div className={styles["box-of-star1"]}>
      <div className={styles["star"] + styles["star-position1"]}></div>
      <div className={styles["star"] + styles["star-position2"]}></div>
      <div className={styles["star"] + styles["star-position3"]}></div>
      <div className={styles["star"] + styles["star-position4"]}></div>
      <div className={styles["star"] + styles["star-position5"]}></div>
      <div className={styles["star"] + styles["star-position6"]}></div>
      <div className={styles["star"] + styles["star-position7"]}></div>
    </div>
    <div className={styles["box-of-star2"]}>
      <div className={styles["star"] + styles["star-position1"]}></div>
      <div className={styles["star"] + styles["star-position2"]}></div>
      <div className={styles["star"] + styles["star-position3"]}></div>
      <div className={styles["star"] + styles["star-position4"]}></div>
      <div className={styles["star"] + styles["star-position5"]}></div>
      <div className={styles["star"] + styles["star-position6"]}></div>
      <div className={styles["star"] + styles["star-position7"]}></div>
    </div>
    <div className={styles["box-of-star3"]}>
      <div className={styles["star"] + styles["star-position1"]}></div>
      <div className={styles["star"] + styles["star-position2"]}></div>
      <div className={styles["star"] + styles["star-position3"]}></div>
      <div className={styles["star"] + styles["star-position4"]}></div>
      <div className={styles["star"] + styles["star-position5"]}></div>
      <div className={styles["star"] + styles["star-position6"]}></div>
      <div className={styles["star"] + styles["star-position7"]}></div>
    </div>
    <div className={styles["box-of-star4"]}>
      <div className={styles["star"] + styles["star-position1"]}></div>
      <div className={styles["star"] + styles["star-position2"]}></div>
      <div className={styles["star"] + styles["star-position3"]}></div>
      <div className={styles["star"] + styles["star-position4"]}></div>
      <div className={styles["star"] + styles["star-position5"]}></div>
      <div className={styles["star"] + styles["star-position6"]}></div>
      <div className={styles["star"] + styles["star-position7"]}></div>
    </div>
    <div data-js="astro" className={styles["astronaut"]}>
      <div className={styles["head"]}></div>
      <div className={styles["arm"] + styles["arm-left"]}></div>
      <div className={styles["arm"] + styles["arm-right"]}></div>
      <div className={styles["body"]}>
        <div className={styles["panel"]}></div>
      </div>
      <div className={styles["leg"] + styles["leg-left"]}></div>
      <div className={styles["leg"] + styles["leg-right"]}></div>
      <div className={styles["schoolbag"]}></div>
    </div>
  </div>
);

export default Loader_cat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_cat = () => (
         <div>
          <div className="box-of-star1">
    <div className="star star-position1"></div>
    <div className="star star-position2"></div>
    <div className="star star-position3"></div>
    <div className="star star-position4"></div>
    <div className="star star-position5"></div>
    <div className="star star-position6"></div>
    <div className="star star-position7"></div>
  </div>
  <div className="box-of-star2">
    <div className="star star-position1"></div>
    <div className="star star-position2"></div>
    <div className="star star-position3"></div>
    <div className="star star-position4"></div>
    <div className="star star-position5"></div>
    <div className="star star-position6"></div>
    <div className="star star-position7"></div>
  </div>
  <div className="box-of-star3">
    <div className="star star-position1"></div>
    <div className="star star-position2"></div>
    <div className="star star-position3"></div>
    <div className="star star-position4"></div>
    <div className="star star-position5"></div>
    <div className="star star-position6"></div>
    <div className="star star-position7"></div>
  </div>
  <div className="box-of-star4">
    <div className="star star-position1"></div>
    <div className="star star-position2"></div>
    <div className="star star-position3"></div>
    <div className="star star-position4"></div>
    <div className="star star-position5"></div>
    <div className="star star-position6"></div>
    <div className="star star-position7"></div>
  </div>
  <div data-js="astro" className="astronaut">
    <div className="head"></div>
    <div className="arm arm-left"></div>
    <div className="arm arm-right"></div>
    <div className="body">
      <div className="panel"></div>
    </div>
    <div className="leg leg-left"></div>
    <div className="leg leg-right"></div>
    <div className="schoolbag"></div>
  </div>
        </div>
        );

        export default Loader_cat;
        
        
         */
}
