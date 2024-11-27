import React from "react";
import styles from "./Button_lack.module.css";

const Button_lack = () => (
  <div>
    <button className={styles["btn1"]}>&gt; Send Message</button>
  </div>
);

export default Button_lack;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_lack = () => (
         <div>
          <button className="btn1">&gt; Send Message</button>
        </div>
        );

        export default Button_lack;
        
        
         */
}
