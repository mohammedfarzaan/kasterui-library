import React from "react";
import styles from "./Card_fight.module.css";

const Card_fight = () => (
  <div>
    <div className={styles["center"]}>
      <div className={styles["design"]}>
        <div
          className={
            styles["circle-1"] + styles["center"] + styles["color-border"]
          }
        >
          <div
            className={
              styles["circle-2"] + styles["center"] + styles["color-border"]
            }
          >
            <div
              className={
                styles["circle-3"] + styles["center"] + styles["color-border"]
              }
            >
              <div
                className={
                  styles["circle-4"] + styles["center"] + styles["color-border"]
                }
              >
                <div className={styles["circle-5"]}></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={styles["mountain-1"] + styles["shape"] + styles["shadow"]}
        ></div>
        <div className={styles["mountain-2"] + styles["shape"]}></div>
        <div
          className={styles["mountain-3"] + styles["shape"] + styles["shadow"]}
        ></div>
      </div>
    </div>
  </div>
);

export default Card_fight;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_fight = () => (
         <div>
          <div className="center">
  <div className="design">
    <div className="circle-1 center color-border">
      <div className="circle-2 center color-border">
        <div className="circle-3 center color-border">
          <div className="circle-4 center color-border">
            <div className="circle-5"></div>
          </div>
        </div>
      </div>
    </div>

    <div className="mountain-1 shape shadow"></div>
    <div className="mountain-2 shape"></div>
    <div className="mountain-3 shape shadow"></div>
  </div>
</div>
        </div>
        );

        export default Card_fight;
        
        
         */
}
