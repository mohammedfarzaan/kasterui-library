import React from "react";
import styles from "./Card_gray.module.css";

const Card_gray = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card_form"]}>
        <span>(Topic)</span>
      </div>
      <div className={styles["card_data"]}>
        <div style="display: flex" className={styles["data"]}>
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
          </div>
        </div>
        <span title="Acceder a la lista (Temas)">Access</span>
      </div>
    </div>
  </div>
);

export default Card_gray;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_gray = () => (
         <div>
          <div className="card">
  <div className="card_form">
    <span>(Topic)</span>
  </div>
  <div className="card_data">
    <div style="display: flex" className="data">
      <div className="text">
        <label className="text_m">Main Title</label>
        <div className="cube text_s">
          <label className="side front">Access the list (Topic)</label>
          <label className="side top">Username-id</label>
        </div>
      </div>
    </div>
    <span title="Acceder a la lista (Temas)">Access</span>
  </div>
</div>
        </div>
        );

        export default Card_gray;
        
        
         */
}
