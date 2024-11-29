import React from "react";
import styles from "./Radio_one.module.css";

const Radio_one = () => (
  <div>
    <div className={styles["radio-inputs"]}>
      <div className={styles["radio1"]} id="one">
        <input type="radio" name="radio" />
        <div className={styles["obj1"]}></div>
        <span className={styles["name"]}>EARTH</span>
      </div>
      <div className={styles["radio2"]} id="two">
        <input type="radio" name="radio" />
        <div className={styles["obj2"]}></div>
        <span className={styles["name"]}>MARS</span>
      </div>

      <div className={styles["radio3"]} id="three">
        <input type="radio" name="radio" />
        <div className={styles["obj3"]}></div>
        <span className={styles["name"]}>MOON</span>
      </div>
    </div>
  </div>
);

export default Radio_one;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_one = () => (
         <div>
          <div className="radio-inputs">
  <div className="radio1" id="one">
    <input type="radio" name="radio" />
    <div className="obj1"></div>
    <span className="name">EARTH</span>
  </div>
  <div className="radio2" id="two">
    <input type="radio" name="radio" />
    <div className="obj2"></div>
    <span className="name">MARS</span>
  </div>
      
  <div className="radio3" id="three">
    <input type="radio" name="radio" />
    <div className="obj3"></div>
    <span className="name">MOON</span>
  </div>
</div>
        </div>
        );

        export default Radio_one;
        
        
         */
}
