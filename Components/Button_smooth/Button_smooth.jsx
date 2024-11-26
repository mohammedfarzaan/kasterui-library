import React from "react";
import styles from "./Button_smooth.module.css";

const Button_smooth = () => (
  <div>
    <button className={styles["button"]}>
      <p className={styles["button-text"]}>Read More</p>{" "}
      <p className={styles["iconer"]}>
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          ></path>
        </svg>
      </p>
    </button>
  </div>
);

export default Button_smooth;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_smooth = () => (
         <div>
          <button className="button">
  <p className="button-text">Read More</p> <p className="iconer"><svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg></p>  
</button>
        </div>
        );

        export default Button_smooth;
        
        
         */
}
