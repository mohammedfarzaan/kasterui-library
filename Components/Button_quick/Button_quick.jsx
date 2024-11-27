import React from "react";
import styles from "./Button_quick.module.css";

const Button_quick = () => (
  <div>
    <button className={styles["button"]}>
      <svg viewBox="2.5 -15 13 13" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="none"
          strokeWidth="1"
          stroke="#000000"
          d="M 8 -7 C 9 -1 11.368 -2.531 12 -4 C 13 -6.6667 14 -9.3333 14.763 -11.565 C 15.381 -13.129 13.796 -14.529 12 -14 C 9.3333 -13 6.6667 -12 4.144 -10.825 C 1.613 -9.096 5.77 -7.45 7.828 -7.1 C 8.5757 -7.9023 9.3233 -8.7047 10.071 -9.507 C 9.385 -8.6703 8.699 -7.8337 8.013 -6.997"
        ></path>
      </svg>
      <p>Send message</p>
    </button>
  </div>
);

export default Button_quick;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_quick = () => (
         <div>
          <button className="button">
  <svg viewBox="2.5 -15 13 13" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="none"
      strokeWidth="1"
      stroke="#000000"
      d="M 8 -7 C 9 -1 11.368 -2.531 12 -4 C 13 -6.6667 14 -9.3333 14.763 -11.565 C 15.381 -13.129 13.796 -14.529 12 -14 C 9.3333 -13 6.6667 -12 4.144 -10.825 C 1.613 -9.096 5.77 -7.45 7.828 -7.1 C 8.5757 -7.9023 9.3233 -8.7047 10.071 -9.507 C 9.385 -8.6703 8.699 -7.8337 8.013 -6.997"
    ></path>
  </svg>
  <p>Send message</p>
</button>
        </div>
        );

        export default Button_quick;
        
        
         */
}
