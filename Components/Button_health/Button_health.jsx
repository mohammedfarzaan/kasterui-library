import React from "react";
import styles from "./Button_health.module.css";

const Button_health = () => (
  <div>
    <button>
      <span className={styles["text"]}>FIRE !!!</span>
      <span className={styles["bullet"]}></span>
    </button>
  </div>
);

export default Button_health;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_health = () => (
         <div>
          <button>
  <span className="text">FIRE !!!</span>
  <span className="bullet"></span>
</button>
        </div>
        );

        export default Button_health;
        
        
         */
}