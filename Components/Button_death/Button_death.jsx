import React from "react";
import styles from "./Button_death.module.css";

const Button_death = () => (
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

export default Button_death;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_death = () => (
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

        export default Button_death;
        
        
         */
}
