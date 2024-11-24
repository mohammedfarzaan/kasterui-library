import React from "react";
import styles from "./Button_put.module.css";

const Button_put = () => (
  <div>
    <button>
      <span className={styles["button-content"]}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H24V24H0z" fill="none"></path>
          <path
            d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"
            fill="currentColor"
          ></path>
        </svg>{" "}
        Ukraine
      </span>
    </button>
  </div>
);

export default Button_put;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_put = () => (
         <div>
          <button>
  <span className="button-content">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H24V24H0z" fill="none"></path><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" fill="currentColor"></path></svg> Ukraine
  </span>
</button>
        </div>
        );

        export default Button_put;
        
        
         */
}
