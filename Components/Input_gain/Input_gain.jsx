import React from "react";
import styles from "./Input_gain.module.css";

const Input_gain = () => (
  <div>
    <div className={styles["InputContainer"]}>
      <input
        placeholder="0000 0000 0000 0000"
        id="input"
        className={styles["input"]}
        name="text"
        type="text"
      />
      <div className={styles["visaCard"]}>
        <svg
          viewBox="0 0 48 48"
          height="23"
          width="23"
          y="0px"
          x="0px"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["logo"]}
        >
          <path
            d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
            fill="#ff9800"
          ></path>
          <path
            d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
            fill="#d50000"
          ></path>
          <path
            d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
            fill="#ff3d00"
          ></path>
        </svg>
      </div>
    </div>
  </div>
);

export default Input_gain;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_gain = () => (
         <div>
          <div className="InputContainer">
  <input placeholder="0000 0000 0000 0000" id="input" className="input" name="text" type="text" />
<div className="visaCard">
  <svg viewBox="0 0 48 48" height="23" width="23" y="0px" x="0px" xmlns="http://www.w3.org/2000/svg" className="logo">
            <path d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" fill="#ff9800"></path><path d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" fill="#d50000"></path><path d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z" fill="#ff3d00"></path>
            </svg>
</div>

</div>
        </div>
        );

        export default Input_gain;
        
        
         */
}
