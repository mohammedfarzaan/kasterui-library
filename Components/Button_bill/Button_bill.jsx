import React from "react";
import styles from "./Button_bill.module.css";

const Button_bill = () => (
  <div>
    <button className={styles["btn-55"]}>
      <span>Button</span>
    </button>
  </div>
);

export default Button_bill;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_bill = () => (
         <div>
          <button className="btn-55"><span>Button</span></button>
        </div>
        );

        export default Button_bill;
        
        
         */
}
