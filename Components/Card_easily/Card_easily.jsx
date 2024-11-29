import React from "react";
import styles from "./Card_easily.module.css";

const Card_easily = () => (
  <div>
    <div className={styles["phoneContainer"]}>
      <div className={styles["screen"]}>
        <div className={styles["camera"]}></div>
        <div className={styles["appsContainer"]}>
          <div className={styles["widgets"]}>
            <div className={styles["one"]}></div>
            <div className={styles["two"]}></div>
          </div>
          <div className={styles["apps"]}>
            <div className={styles["oneApp"]}></div>
            <div className={styles["oneApp"]}></div>
            <div className={styles["oneApp"]}></div>
            <div className={styles["oneApp"]}></div>
            <div className={styles["oneApp"]}></div>
            <div className={styles["oneApp"]}></div>
            <div className={styles["oneApp"]}></div>
            <div className={styles["oneApp"]}></div>
            <div className={styles["oneApp"]}></div>
            <div className={styles["oneApp"]}></div>
            <div className={styles["oneApp"]}></div>
            <div className={styles["oneApp"]}></div>
          </div>

          <div className={styles["menuBar"]}>
            <div className={styles["twoApp"]}></div>
            <div className={styles["twoApp"]}></div>
            <div className={styles["twoApp"]}></div>
            <div className={styles["twoApp"]}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_easily;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_easily = () => (
         <div>
          <div className="phoneContainer">
    <div className="screen">
        <div className="camera"></div>
        <div className="appsContainer">
            <div className="widgets">
                <div className="one"></div>
                <div className="two"></div>
            </div>
            <div className="apps">
                <div className="oneApp"></div>
                <div className="oneApp"></div>
                <div className="oneApp"></div>
                <div className="oneApp"></div>
                <div className="oneApp"></div>
                <div className="oneApp"></div>
                <div className="oneApp"></div>
                <div className="oneApp"></div>
                <div className="oneApp"></div>
                <div className="oneApp"></div>
                <div className="oneApp"></div>
                <div className="oneApp"></div>
            </div>

            <div className="menuBar">
                <div className="twoApp"></div>
                <div className="twoApp"></div>
                <div className="twoApp"></div>
                <div className="twoApp"></div>
            </div>
        </div>
    </div>
    </div>
        </div>
        );

        export default Card_easily;
        
        
         */
}
