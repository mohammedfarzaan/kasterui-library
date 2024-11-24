import React from "react";
import styles from "./Button_under.module.css";

const Button_under = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["text"]}>send message</span>
      <span className={styles["icon"]}>
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          data-icon="paper-plane"
          width="20px"
          aria-hidden="true"
        >
          <path
            d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
    </button>
  </div>
);

export default Button_under;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_under = () => (
         <div>
          <button className="button">
  <span className="text">send message</span>
  <span className="icon"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-icon="paper-plane" width="20px" aria-hidden="true"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" fill="currentColor"></path></svg></span>
</button>
        </div>
        );

        export default Button_under;
        
        
         */
}
