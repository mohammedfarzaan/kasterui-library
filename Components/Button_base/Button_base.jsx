import React from "react";
import styles from "./Button_base.module.css";

const Button_base = () => (
  <div>
    <button className={styles["Btn-Container"]}>
      <span className={styles["text"]}>let's go!</span>
      <span className={styles["icon-Container"]}>
        <svg
          width="16"
          height="19"
          viewBox="0 0 16 19"
          fill="nones"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
          <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
          <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
          <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
          <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
          <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
          <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
          <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
          <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
          <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
        </svg>
      </span>
    </button>
  </div>
);

export default Button_base;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_base = () => (
         <div>
          <button className="Btn-Container">
  <span className="text">let's go!</span>
  <span className="icon-Container">
    <svg
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="nones"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
      <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
      <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
      <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
      <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
      <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
      <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
    </svg>
  </span>
</button>
        </div>
        );

        export default Button_base;
        
        
         */
}
