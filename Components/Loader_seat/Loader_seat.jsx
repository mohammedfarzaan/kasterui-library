import React from "react";
import styles from "./Loader_seat.module.css";

const Loader_seat = () => (
  <div>
    <div className={styles["spinner-container"]}>
      <div className={styles["spinner"]}>
        <div className={styles["spinner"]}>
          <div className={styles["spinner"]}>
            <div className={styles["spinner"]}>
              <div className={styles["spinner"]}>
                <div className={styles["spinner"]}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_seat;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_seat = () => (
         <div>
          <div className="spinner-container">
  <div className="spinner">
   <div className="spinner">
    <div className="spinner">
      <div className="spinner">
        <div className="spinner">
            <div className="spinner"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_seat;
        
        
         */
}
