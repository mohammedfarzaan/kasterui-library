import React from "react";
import styles from "./Card_honor.module.css";

const Card_honor = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["bar"]}></div>
      <div className={styles["card_form"]}></div>
      <div className={styles["card_data"]}>
        <div className={styles["data"]}>
          <div className={styles["text"]}>
            <label className={styles["text_m"]}>Main Title</label>
            <div className={styles["cube"] + styles["text_s"]}>
              <label className={styles["side"] + styles["front"]}>
                Access the list (Topic)
              </label>
              <label className={styles["side"] + styles["top"]}>
                Username-id
              </label>
            </div>
            <label className={styles["text_d"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Unum
              nescio, quo modo possit, si luxuriosus sit, finitas cupiditates
              habere.
            </label>
          </div>
        </div>
        <span title="Acceder a la lista (Temas)">Access</span>
      </div>
    </div>
  </div>
);

export default Card_honor;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_honor = () => (
         <div>
          <div className="card">
  <div className="bar"></div>
  <div className="card_form"></div>
  <div className="card_data">
    <div className="data">
      <div className="text">
        <label className="text_m">Main Title</label>
        <div className="cube text_s">
          <label className="side front">Access the list (Topic)</label>
          <label className="side top">Username-id</label>
        </div>
        <label className="text_d"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Unum nescio,
          quo modo possit, si luxuriosus sit, finitas cupiditates habere.
        </label>
      </div>
    </div>
    <span title="Acceder a la lista (Temas)">Access</span>
  </div>
</div>
        </div>
        );

        export default Card_honor;
        
        
         */
}
