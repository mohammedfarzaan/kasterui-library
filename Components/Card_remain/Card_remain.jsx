import React from "react";
import styles from "./Card_remain.module.css";

const Card_remain = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["header"]}>
        <div className={styles["image"]}>
          <svg
            aria-hidden="true"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
        <div className={styles["content"]}>
          <span className={styles["title"]}>Desactivate account</span>
          <p className={styles["message"]}>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>
        </div>
        <div className={styles["actions"]}>
          <button className={styles["desactivate"]} type="button">
            Desactivate
          </button>
          <button className={styles["cancel"]} type="button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Card_remain;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_remain = () => (
         <div>
          <div className="card">
  <div className="header">
    <div className="image"><svg aria-hidden="true" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
                <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" strokeLinejoin="round" strokeLinecap="round"></path>
              </svg></div>
    <div className="content">
       <span className="title">Desactivate account</span>
       <p className="message">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
    </div>
     <div className="actions">
       <button className="desactivate" type="button">Desactivate</button>
       <button className="cancel" type="button">Cancel</button>
    </div>
  </div>
  </div>
        </div>
        );

        export default Card_remain;
        
        
         */
}
