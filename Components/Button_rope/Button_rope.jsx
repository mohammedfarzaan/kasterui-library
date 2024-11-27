import React from "react";
import styles from "./Button_rope.module.css";

const Button_rope = () => (
  <div>
    <button className={styles["button"]}>
      <i>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <defs></defs>
          <title></title>
          <path
            className="a"
            d="M2.758,15.629a1.664,1.664,0,0,1-.882-3.075L20.359,1A1.663,1.663,0,0,1,22.875,2.72L19.281,21.893a1.664,1.664,0,0,1-2.966.691L11.1,15.629Z"
          ></path>
          <path
            className="a"
            d="M11.1,15.629H8.6V20.8a1.663,1.663,0,0,0,2.6,1.374l3.178-2.166Z"
          ></path>
          <line
            className="a"
            x1="11.098"
            x2="22.178"
            y1="15.629"
            y2="1.039"
          ></line>
        </svg>
        Send Message
      </i>
    </button>
  </div>
);

export default Button_rope;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_rope = () => (
         <div>
          <button className="button">
  <i>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <title></title>
      <path
        className="a"
        d="M2.758,15.629a1.664,1.664,0,0,1-.882-3.075L20.359,1A1.663,1.663,0,0,1,22.875,2.72L19.281,21.893a1.664,1.664,0,0,1-2.966.691L11.1,15.629Z"
      ></path>
      <path
        className="a"
        d="M11.1,15.629H8.6V20.8a1.663,1.663,0,0,0,2.6,1.374l3.178-2.166Z"
      ></path>
      <line className="a" x1="11.098" x2="22.178" y1="15.629" y2="1.039"></line>
    </svg>
    Send Message</i
  >
</button>
        </div>
        );

        export default Button_rope;
        
        
         */
}
