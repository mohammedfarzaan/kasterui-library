import React from "react";
import styles from "./Button_lead.module.css";

const Button_lead = () => (
  <div>
    <button className={styles["button"]}>Awesome Button</button>
  </div>
);

export default Button_lead;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_lead = () => (
         <div>
          <button className="button">Awesome Button</button>
        </div>
        );

        export default Button_lead;
        
        
         */
}
