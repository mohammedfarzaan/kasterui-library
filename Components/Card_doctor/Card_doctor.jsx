import React from "react";
import styles from "./Card_doctor.module.css";

const Card_doctor = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["img"]}></div>
      <div className={styles["info"]}>
        <span>John Doe</span>
        <p>Web Dev</p>
      </div>
      <a href="#">Button</a>
    </div>
  </div>
);

export default Card_doctor;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_doctor = () => (
         <div>
          <div className="card">
<div className="img"></div>
  <div className="info">
    <span>John Doe</span>
    <p>Web Dev</p>
  </div>
  <a href="#">Button</a>
</div>
        </div>
        );

        export default Card_doctor;
        
        
         */
}
