import React from "react";
import styles from "./Button_silent.module.css";

const Button_silent = () => (
  <div>
    <button>
      <span className={styles["text"]}>Hover me</span>
      <span>Thanks!</span>
    </button>
  </div>
);

export default Button_silent;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_silent = () => (
         <div>
          <button><span className="text">Hover me</span><span>Thanks!</span></button>
        </div>
        );

        export default Button_silent;
        
        
         */
}
