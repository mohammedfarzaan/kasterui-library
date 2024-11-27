import React from "react";
import styles from "./Button_voice.module.css";

const Button_voice = () => (
  <div>
    <div className={styles["paste-button"]}>
      <button className={styles["button"]}>Paste &nbsp; ▼</button>
      <div className={styles["dropdown-content"]}>
        <a id="top" href="#">
          Keep source formatting
        </a>
        <a id="middle" href="#">
          Merge formatting
        </a>
        <a id="bottom" href="#">
          Keep text only
        </a>
      </div>
    </div>
  </div>
);

export default Button_voice;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_voice = () => (
         <div>
          <div className="paste-button">
  <button className="button">Paste &nbsp; ▼</button>
  <div className="dropdown-content">
    <a id="top" href="#">Keep source formatting</a>
    <a id="middle" href="#">Merge formatting</a>
    <a id="bottom" href="#">Keep text only</a>
  </div>
</div>
        </div>
        );

        export default Button_voice;
        
        
         */
}
