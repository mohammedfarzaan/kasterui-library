import React from "react";
import styles from "./Button_hollow.module.css";

const Button_hollow = () => (
  <div>
    <button className={styles["bookmarkBtn"]}>
      <span className={styles["IconContainer"]}>
        <svg viewBox="0 0 384 512" height="0.9em" className={styles["icon"]}>
          <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path>
        </svg>
      </span>
      <p className={styles["text"]}>Save</p>
    </button>
  </div>
);

export default Button_hollow;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_hollow = () => (
         <div>
          <button className="bookmarkBtn">
  <span className="IconContainer">
    <svg viewBox="0 0 384 512" height="0.9em" className="icon">
      <path
        d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
      ></path>
    </svg>
  </span>
  <p className="text">Save</p>
</button>
        </div>
        );

        export default Button_hollow;
        
        
         */
}
