import React from "react";
import styles from "./Radio_well.module.css";

const Radio_well = () => (
  <div>
    <div>
      <label className={styles["rad-label"]}>
        <input type="radio" className={styles["rad-input"]} name="rad" />
        <div className={styles["rad-design"]}></div>
        <div className={styles["rad-text"]}>Air</div>
      </label>

      <label className={styles["rad-label"]}>
        <input type="radio" className={styles["rad-input"]} name="rad" />
        <div className={styles["rad-design"]}></div>
        <div className={styles["rad-text"]}>Earth</div>
      </label>

      <label className={styles["rad-label"]}>
        <input type="radio" className={styles["rad-input"]} name="rad" />
        <div className={styles["rad-design"]}></div>
        <div className={styles["rad-text"]}>Water</div>
      </label>
    </div>
  </div>
);

export default Radio_well;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_well = () => (
         <div>
          <div>

  <label className="rad-label">
    <input type="radio" className="rad-input" name="rad" />
    <div className="rad-design"></div>
    <div className="rad-text">Air</div>
  </label>

  <label className="rad-label">
    <input type="radio" className="rad-input" name="rad" />
    <div className="rad-design"></div>
    <div className="rad-text">Earth</div>
  </label>

  <label className="rad-label">
    <input type="radio" className="rad-input" name="rad" />
    <div className="rad-design"></div>
    <div className="rad-text">Water</div>
  </label>

</div>
        </div>
        );

        export default Radio_well;
        
        
         */
}
