import React from "react";
import styles from "./Button_fed.module.css";

const Button_fed = () => (
  <div>
    <button className={styles["button__click"]}>
      <div className={styles["button__click__background"]}></div>
      Click me
    </button>
  </div>
);

export default Button_fed;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_fed = () => (
         <div>
          <button className="button__click">
  <div className="button__click__background"></div>
  Click me
</button>
        </div>
        );

        export default Button_fed;
        
        
         */
}
