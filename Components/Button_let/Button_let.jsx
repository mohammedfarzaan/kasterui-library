import React from "react";
import styles from "./Button_let.module.css";

const Button_let = () => (
  <div>
    <button>
      <span className={styles["transition"]}></span>
      <span className={styles["gradient"]}></span>
      <span className={styles["label"]}>Button</span>
    </button>
  </div>
);

export default Button_let;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_let = () => (
         <div>
          <button>
  <span className="transition"></span>
  <span className="gradient"></span>
  <span className="label">Button</span>
</button>
        </div>
        );

        export default Button_let;
        
        
         */
}
