import React from "react";
import styles from "./Button_moving.module.css";

const Button_moving = () => (
  <div>
    <button>
      {" "}
      <span className={styles["text"]}>Button</span>
      <span className={styles["blob"]}></span>
      <span className={styles["blob"]}></span>
      <span className={styles["blob"]}></span>
      <span className={styles["blob"]}></span>
    </button>
  </div>
);

export default Button_moving;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_moving = () => (
         <div>
          <button> <span className="text">Button</span>
  <span className="blob"></span>
  <span className="blob"></span>
  <span className="blob"></span>
  <span className="blob"></span>
</button>
        </div>
        );

        export default Button_moving;
        
        
         */
}