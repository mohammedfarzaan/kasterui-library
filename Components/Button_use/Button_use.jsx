import React from "react";
import styles from "./Button_use.module.css";

const Button_use = () => (
  <div>
    <a style="--clr: #7808d0" className={styles["button"]} href="#">
      <span className={styles["button__icon-wrapper"]}>
        <svg
          width="10"
          className="button__icon-svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 15"
        >
          <path
            fill="currentColor"
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          ></path>
        </svg>

        <svg
          className="button__icon-svg  button__icon-svg--copy"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          fill="none"
          viewBox="0 0 14 15"
        >
          <path
            fill="currentColor"
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          ></path>
        </svg>
      </span>
      Explore All
    </a>
  </div>
);

export default Button_use;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_use = () => (
         <div>
          <a style="--clr: #7808d0" className="button" href="#">
            <span className="button__icon-wrapper">
                <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
                
                <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
            </span>
            Explore All
        </a>
        </div>
        );

        export default Button_use;
        
        
         */
}
