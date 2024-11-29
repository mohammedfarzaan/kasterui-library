import React from "react";
import styles from "./Card_meat.module.css";

const Card_meat = () => (
  <div>
    <input id="switch" type="checkbox" />
    <div className={styles["app"]}>
      <div className={styles["body"]}>
        <div className={styles["phone"]}>
          <div className={styles["menu"]}>
            <div className={styles["time"]}>4:20</div>
            <div className={styles["icons"]}>
              <div className={styles["network"]}></div>
              <div className={styles["battery"]}></div>
            </div>
          </div>

          <div className={styles["content"]}>
            <div className={styles["circle"]}>
              <div className={styles["crescent"]}></div>
            </div>

            <label for="switch">
              <div className={styles["toggle"]}></div>
              <div className={styles["names"]}>
                <p className={styles["light"]}>Light</p>
                <p className={styles["dark"]}>Dark</p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_meat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_meat = () => (
         <div>
          <input id="switch" type="checkbox" />
<div className="app">
  <div className="body">
    
    <div className="phone">
    
      <div className="menu">
        <div className="time">4:20</div>
        <div className="icons">
          <div className="network"></div>
          <div className="battery"></div>
        </div>
      </div>
    
      <div className="content">
        <div className="circle">
          <div className="crescent"></div>
        </div>
       
        <label for="switch">
          <div className="toggle"></div>
          <div className="names">
            <p className="light">Light</p>
            <p className="dark">Dark</p>
          </div>
        </label>
        
       
      </div>
      
    </div>
  </div>
  
</div>
        </div>
        );

        export default Card_meat;
        
        
         */
}
