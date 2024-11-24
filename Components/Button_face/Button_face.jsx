import React from "react";
import styles from "./Button_face.module.css";

const Button_face = () => (
  <div>
    <button className={styles["designer-btn"]}>Click me</button>
  </div>
);

export default Button_face;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_face = () => (
         <div>
          <button className="designer-btn">Click me</button>
        </div>
        );

        export default Button_face;
        
        
         */
}
