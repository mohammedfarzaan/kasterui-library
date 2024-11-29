import React from "react";
import styles from "./Input_gas.module.css";

const Input_gas = () => (
  <div>
    <div
      className={
        styles["input__container"] + styles["input__container--variant"]
      }
    >
      <div
        className={styles["shadow__input"] + styles["shadow__input--variant"]}
      ></div>
      <input
        type="text"
        name="text"
        className={styles["input__search"] + styles["input__search--variant"]}
        placeholder="Search..."
      />
      <button
        className={
          styles["input__button__shadow"] +
          styles["input__button__shadow--variant"]
        }
      >
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          height="1.5em"
          width="13em"
        >
          <path
            d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
            fillRule="evenodd"
            fill="#FFF"
          ></path>
        </svg>
      </button>
    </div>
  </div>
);

export default Input_gas;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_gas = () => (
         <div>
          <div className="input__container input__container--variant">
        <div className="shadow__input shadow__input--variant"></div>
        <input type="text" name="text" className="input__search input__search--variant" placeholder="Search..." />
        <button className="input__button__shadow input__button__shadow--variant">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="1.5em" width="13em">
            <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fillRule="evenodd" fill="#FFF"></path>
          </svg>
        </button>
      </div>
        </div>
        );

        export default Input_gas;
        
        
         */
}
