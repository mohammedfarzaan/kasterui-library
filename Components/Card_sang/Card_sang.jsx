import React from "react";
import styles from "./Card_sang.module.css";

const Card_sang = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-content"]}>
        <p className={styles["card-heading"]}>Delete file?</p>
        <p className={styles["card-description"]}>
          Lorem ipsum dolor sit amet, consectetur adi
        </p>
      </div>
      <div className={styles["card-button-wrapper"]}>
        <button className={styles["card-button"] + styles["secondary"]}>
          Cancel
        </button>
        <button className={styles["card-button"] + styles["primary"]}>
          Delete
        </button>
      </div>
      <button className={styles["exit-button"]}>
        <svg height="20px" viewBox="0 0 384 512">
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
        </svg>
      </button>
    </div>
  </div>
);

export default Card_sang;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_sang = () => (
         <div>
          <div className="card">
  <div className="card-content">
    <p className="card-heading">Delete file?</p>
    <p className="card-description">Lorem ipsum dolor sit amet, consectetur adi</p>
  </div>
  <div className="card-button-wrapper">
    <button className="card-button secondary">Cancel</button>
    <button className="card-button primary">Delete</button>
  </div>
  <button className="exit-button">
    <svg height="20px" viewBox="0 0 384 512">
      <path
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
      ></path>
    </svg>
  </button>
</div>
        </div>
        );

        export default Card_sang;
        
        
         */
}
