import React from "react";
import styles from "./Button_seat.module.css";

const Button_seat = () => (
  <div>
    <button>
      <span className={styles["text"]}>Hover me</span>
      <span>Thanks!</span>
    </button>
  </div>
);

export default Button_seat;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_seat = () => (
         <div>
          <button><span className="text">Hover me</span><span>Thanks!</span></button>
        </div>
        );

        export default Button_seat;
        
        
         */
}
