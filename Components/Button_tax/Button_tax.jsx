import React from "react";
import styles from "./Button_tax.module.css";

const Button_tax = () => (
  <div>
    <button className={styles["button"]}>
      Get started
      <span className={styles["button-span"]}> ─ it's free</span>
    </button>
  </div>
);

export default Button_tax;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_tax = () => (
         <div>
          <button className="button">
  Get started
  <span className="button-span"> ─ it's free</span>
</button>
        </div>
        );

        export default Button_tax;
        
        
         */
}
