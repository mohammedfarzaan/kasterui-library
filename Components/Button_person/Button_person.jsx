import React from "react";
import styles from "./Button_person.module.css";

const Button_person = () => (
  <div>
    <button className={styles["btn-17"]}>
      <span className={styles["text-container"]}>
        <span className={styles["text"]}>Button</span>
      </span>
    </button>
  </div>
);

export default Button_person;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_person = () => (
         <div>
          <button className="btn-17">
  <span className="text-container">
    <span className="text">Button</span>
  </span>
</button>
        </div>
        );

        export default Button_person;
        
        
         */
}
