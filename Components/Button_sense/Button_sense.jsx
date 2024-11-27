import React from "react";
import styles from "./Button_sense.module.css";

const Button_sense = () => (
  <div>
    <button className={styles["button"]}>
      Join Now<span className={styles["arrow"]}>&gt;</span>
    </button>
  </div>
);

export default Button_sense;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_sense = () => (
         <div>
          <button className="button">Join Now<span className="arrow">&gt;</span></button>
        </div>
        );

        export default Button_sense;
        
        
         */
}
