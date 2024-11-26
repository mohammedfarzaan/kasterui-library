import React from "react";
import styles from "./Button_dull.module.css";

const Button_dull = () => (
  <div>
    <div className={styles["tab-container"]}>
      <input
        type="radio"
        name="tab"
        id="tab1"
        className={styles["tab"] + styles["tab--1"]}
      />
      <label className={styles["tab_label"]} for="tab1">
        Profile
      </label>

      <input
        type="radio"
        name="tab"
        id="tab2"
        className={styles["tab"] + styles["tab--2"]}
      />
      <label className={styles["tab_label"]} for="tab2">
        Settings
      </label>

      <input
        type="radio"
        name="tab"
        id="tab3"
        className={styles["tab"] + styles["tab--3"]}
      />
      <label className={styles["tab_label"]} for="tab3">
        Notifications
      </label>

      <div className={styles["indicator"]}></div>
    </div>
  </div>
);

export default Button_dull;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_dull = () => (
         <div>
          <div className="tab-container">
  <input type="radio" name="tab" id="tab1" className="tab tab--1" />
  <label className="tab_label" for="tab1">Profile</label>

  <input type="radio" name="tab" id="tab2" className="tab tab--2" />
  <label className="tab_label" for="tab2">Settings</label>

  <input type="radio" name="tab" id="tab3" className="tab tab--3" />
  <label className="tab_label" for="tab3">Notifications</label>

  <div className="indicator"></div>
</div>
        </div>
        );

        export default Button_dull;
        
        
         */
}
