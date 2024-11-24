import React from "react";
import styles from "./Button_form.module.css";

const Button_form = () => (
  <div>
    <button className={styles["btn"]} type="button">
      <strong>SPACE</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className={styles["circle"]}></div>
        <div className={styles["circle"]}></div>
      </div>
    </button>
  </div>
);

export default Button_form;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_form = () => (
         <div>
          <button className="btn" type="button">
  <strong>SPACE</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
</button>
        </div>
        );

        export default Button_form;
        
        
         */
}
