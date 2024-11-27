import React from "react";
import styles from "./Button_dirty.module.css";

const Button_dirty = () => (
  <div>
    <button className={styles["button"]}>
      SIGNUP
      <span>
        <svg
          viewBox="0 0 16 16"
          className="bi bi-door-open-fill"
          fill="currentColor"
          height="19"
          width="19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"></path>
        </svg>
      </span>
    </button>
  </div>
);

export default Button_dirty;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_dirty = () => (
         <div>
          <button className="button">
  SIGNUP
  <span>
  <svg viewBox="0 0 16 16" className="bi bi-door-open-fill" fill="currentColor" height="19" width="19" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"></path>
</svg></span>
</button>
        </div>
        );

        export default Button_dirty;
        
        
         */
}
