import React from "react";
import styles from "./Toggle_obtain.module.css";

const Toggle_obtain = () => (
  <div>
    <div className={styles["checkbox-wrapper"]}>
      <label className={styles["toggleButton"]}>
        <input type="checkbox" />
        <div>
          <svg viewBox="0 0 44 44">
            <path
              transform="translate(-2.000000, -2.000000)"
              d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"
            ></path>
          </svg>
        </div>
      </label>
    </div>
  </div>
);

export default Toggle_obtain;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_obtain = () => (
         <div>
          <div className="checkbox-wrapper">
  <label className="toggleButton">
    <input type="checkbox" />
    <div>
      <svg viewBox="0 0 44 44">
        <path transform="translate(-2.000000, -2.000000)" d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"></path>
      </svg>
    </div>
  </label>
</div>
        </div>
        );

        export default Toggle_obtain;
        
        
         */
}
