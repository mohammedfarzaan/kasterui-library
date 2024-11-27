import React from "react";
import styles from "./Button_born.module.css";

const Button_born = () => (
  <div>
    <div tabindex="0" className={styles["plusButton"]}>
      <svg
        className="plusIcon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
      >
        <g mask="url(#mask0_21_345)">
          <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
        </g>
      </svg>
    </div>
  </div>
);

export default Button_born;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_born = () => (
         <div>
          <div tabindex="0" className="plusButton">
  <svg className="plusIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
    <g mask="url(#mask0_21_345)">
      <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
    </g>
  </svg>
</div>
        </div>
        );

        export default Button_born;
        
        
         */
}
