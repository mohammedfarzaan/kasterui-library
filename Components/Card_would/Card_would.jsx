import React from "react";
import styles from "./Card_would.module.css";

const Card_would = () => (
  <div>
    <div className={styles["notificationCard"]}>
      <p className={styles["notificationHeading"]}>Push notifications</p>
      <svg className={styles["bellIcon"]} viewBox="0 0 448 512">
        <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"></path>
      </svg>
      <p className={styles["notificationPara"]}>
        Allow push notifications so you will get latest updates
      </p>
      <div className={styles["buttonContainer"]}>
        <button className={styles["AllowBtn"]}>Allow</button>
        <button className={styles["NotnowBtn"]}>Now now</button>
      </div>
    </div>
  </div>
);

export default Card_would;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_would = () => (
         <div>
          <div className="notificationCard">
  <p className="notificationHeading">Push notifications</p>
  <svg className="bellIcon" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"></path></svg>
  <p className="notificationPara">Allow push notifications so you will get latest updates</p>
  <div className="buttonContainer">
    <button className="AllowBtn">Allow</button>
    <button className="NotnowBtn">Now now</button>
  </div>
</div>
        </div>
        );

        export default Card_would;
        
        
         */
}
