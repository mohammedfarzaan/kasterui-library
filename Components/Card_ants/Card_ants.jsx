import React from "react";
import styles from "./Card_ants.module.css";

const Card_ants = () => (
  <div>
    <div className={styles["ag-courses_item"]}>
      <a className={styles["ag-courses-item_link"]} href="#">
        <div className={styles["ag-courses-item_bg"]}></div>
        <div className={styles["ag-courses-item_title"]}>
          You Welcome In Uiverse
        </div>
        <div className={styles["ag-courses-item_date-box"]}>
          Start:
          <span className={styles["ag-courses-item_date"]}> 14.11.2023 </span>
        </div>
      </a>
    </div>
  </div>
);

export default Card_ants;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_ants = () => (
         <div>
          <div className="ag-courses_item">
  <a className="ag-courses-item_link" href="#">
    <div className="ag-courses-item_bg"></div>
    <div className="ag-courses-item_title">You Welcome In Uiverse</div>
    <div className="ag-courses-item_date-box">
      Start:
      <span className="ag-courses-item_date"> 14.11.2023 </span>
    </div>
  </a>
</div>
        </div>
        );

        export default Card_ants;
        
        
         */
}
