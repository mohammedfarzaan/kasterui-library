import React from "react";
import styles from "./Radio_fog.module.css";

const Radio_fog = () => (
  <div>
    <div className={styles["radio-input-wrapper"]}>
      <label className={styles["label"]}>
        <input
          value="value-2"
          name="value-radio"
          id="value-2"
          className={styles["radio-input"]}
          type="radio"
        />
        <div className={styles["radio-design"]}></div>
        <div className={styles["label-text"]}>Clouds</div>
      </label>
      <label className={styles["label"]}>
        <input
          value="value-3"
          name="value-radio"
          id="value-3"
          className={styles["radio-input"]}
          type="radio"
        />
        <div className={styles["radio-design"]}></div>
        <div className={styles["label-text"]}>Earth</div>
      </label>
      <label className={styles["label"]}>
        <input
          value="value-4"
          name="value-radio"
          id="value-4"
          className={styles["radio-input"]}
          type="radio"
        />
        <div className={styles["radio-design"]}></div>
        <div className={styles["label-text"]}>Water</div>
      </label>
    </div>
  </div>
);

export default Radio_fog;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_fog = () => (
         <div>
          <div className="radio-input-wrapper">
  <label className="label">
    <input value="value-2" name="value-radio" id="value-2" className="radio-input" type="radio" />
    <div className="radio-design"></div>
    <div className="label-text">Clouds</div>
  </label>
  <label className="label">
    <input value="value-3" name="value-radio" id="value-3" className="radio-input" type="radio" />
    <div className="radio-design"></div>
    <div className="label-text">Earth</div>
  </label>
  <label className="label">
    <input value="value-4" name="value-radio" id="value-4" className="radio-input" type="radio" />
    <div className="radio-design"></div>
    <div className="label-text">Water</div>
  </label>
</div>
        </div>
        );

        export default Radio_fog;
        
        
         */
}
