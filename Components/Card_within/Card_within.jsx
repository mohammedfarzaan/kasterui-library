import React from "react";
import styles from "./Card_within.module.css";

const Card_within = () => (
  <div>
    <div className={styles["card"]}>
      <p className={styles["text1"]}>Come Deeper</p>
      <div className={styles["one"]}>
        <div className={styles["two"]}>
          <div className={styles["three"]}>
            <div className={styles["four"]}>
              <div className={styles["five"]}>
                <p className={styles["text2"]}>
                  It's
                  <br />
                  Deep
                  <br />
                  In Here...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_within;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_within = () => (
         <div>
          <div className="card">
    <p className="text1">Come Deeper
    </p>
    <div className="one">
        <div className="two">
            <div className="three">
                <div className="four">
                    <div className="five">

                        <p className="text2">It's<br />Deep<br />In Here...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
        );

        export default Card_within;
        
        
         */
}
