import React from "react";
import styles from "./Button_light.module.css";

const Button_light = () => (
  <div>
    <button className={styles["btn1"]}>&gt; Send Message</button>
  </div>
);

export default Button_light;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_light = () => (
         <div>
          <button className="btn1">&gt; Send Message</button>
        </div>
        );

        export default Button_light;
        
        
         */
}
