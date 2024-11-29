import React from "react";
import styles from "./Card_horn.module.css";

const Card_horn = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["image"]}></div>
      <div className={styles["content"]}>
        <p className={styles["text-1"]}>Run with the pack</p>

        <div className={styles["text-2"]}>
          <span>Get 35% off</span>
          <span>On your next order over $100</span>
        </div>

        <a className={styles["action"]} href="">
          Get Discount
        </a>

        <p className={styles["date"]}>Offer valid until 29th April, 2023 *</p>
      </div>
    </div>
  </div>
);

export default Card_horn;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_horn = () => (
         <div>
          <div className="card">
  <div className="image"></div>
  <div className="content">
    <p className="text-1">
      Run with the pack
    </p>

    <div className="text-2">
      <span>
        Get 35% off
      </span>
      <span>On your next order over $100</span>
    </div>

    <a className="action" href="">
      Get Discount
    </a>

    <p className="date">
      Offer valid until 29th April, 2023 *
    </p>
  </div>
</div>
        </div>
        );

        export default Card_horn;
        
        
         */
}
