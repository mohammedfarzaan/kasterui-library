import React from "react";
import styles from "./Button_here.module.css";

const Button_here = () => (
  <div>
    <button className={styles["btn-save"]}>
      <svg
        viewBox="0 0 384 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"></path>
      </svg>
    </button>
  </div>
);

export default Button_here;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_here = () => (
         <div>
          <button className="btn-save">
    <svg viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"></path></svg>
    
  </button>
        </div>
        );

        export default Button_here;
        
        
         */
}
