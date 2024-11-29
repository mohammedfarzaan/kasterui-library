import React from "react";
import styles from "./Card_again.module.css";

const Card_again = () => (
  <div>
    <div className={styles["three-d-card"]}>
      <div className={styles["card-wrapper"]}>
        <div className={styles["card-face"] + styles["front"]}>
          <div className={styles["card-content"]}>
            <div className={styles["card-title"]}>3D Card</div>
            <div className={styles["card-description"]}>
              Hover over me for a 3D effect!
            </div>
          </div>
        </div>
        <div className={styles["card-face"] + styles["back"]}>
          <div className={styles["card-content"]}>
            <div className={styles["card-title"]}>Back Side</div>
            <div className={styles["card-description"]}>
              This is the back of the 3D card.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_again;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_again = () => (
         <div>
          <div className="three-d-card">
  <div className="card-wrapper">
    <div className="card-face front">
      <div className="card-content">
        <div className="card-title">3D Card</div>
        <div className="card-description">Hover over me for a 3D effect!</div>
      </div>
    </div>
    <div className="card-face back">
      <div className="card-content">
        <div className="card-title">Back Side</div>
        <div className="card-description">This is the back of the 3D card.</div>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_again;
        
        
         */
}
