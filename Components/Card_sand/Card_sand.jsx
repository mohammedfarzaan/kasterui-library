import React from "react";
import styles from "./Card_sand.module.css";

const Card_sand = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["container"]}>
        <div className={styles["left"]}>
          <div className={styles["status-ind"]}></div>
        </div>
        <div className={styles["right"]}>
          <div className={styles["text-wrap"]}>
            <p className={styles["text-content"]}>
              <a className={styles["text-link"]} href="#">
                Jane Doe
              </a>{" "}
              invited you to edit the
              <a className={styles["text-link"]} href="#">
                Web Design
              </a>{" "}
              file.
            </p>
            <p className={styles["time"]}>2 hours ago</p>
          </div>
          <div className={styles["button-wrap"]}>
            <button className={styles["primary-cta"]}>View file</button>
            <button className={styles["secondary-cta"]}>Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_sand;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_sand = () => (
         <div>
          <div className="card">
  <div className="container">
    <div className="left">
      <div className="status-ind"></div>
    </div>
    <div className="right">
      <div className="text-wrap">
        <p className="text-content">
          <a className="text-link" href="#">Jane Doe</a> invited you to edit the
          <a className="text-link" href="#">Web Design</a> file.
        </p>
        <p className="time">2 hours ago</p>
      </div>
      <div className="button-wrap">
        <button className="primary-cta">View file</button>
        <button className="secondary-cta">Mark as read</button>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_sand;
        
        
         */
}
