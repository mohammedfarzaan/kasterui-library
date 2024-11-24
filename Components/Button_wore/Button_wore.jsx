import React from "react";
import styles from "./Button_wore.module.css";

const Button_wore = () => (
  <div>
    <button className={styles["button"]}>
      <p className={styles["text"]}>Button</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className={styles["svg"]}
      >
        <path
          className={styles["path"]}
          transform="translate(100 100)"
          d="M56.8,-23.9C61.7,-3.2,45.7,18.8,26.5,31.7C7.2,44.6,-15.2,48.2,-35.5,36.5C-55.8,24.7,-73.9,-2.6,-67.6,-25.2C-61.3,-47.7,-30.6,-65.6,-2.4,-64.8C25.9,-64.1,51.8,-44.7,56.8,-23.9Z"
          fill="#4073ff"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_wore;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_wore = () => (
         <div>
          <button className="button">
  <p className="text">Button</p>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="svg">
    <path className="path" transform="translate(100 100)" d="M56.8,-23.9C61.7,-3.2,45.7,18.8,26.5,31.7C7.2,44.6,-15.2,48.2,-35.5,36.5C-55.8,24.7,-73.9,-2.6,-67.6,-25.2C-61.3,-47.7,-30.6,-65.6,-2.4,-64.8C25.9,-64.1,51.8,-44.7,56.8,-23.9Z" fill="#4073ff"></path>
  </svg>
</button>
        </div>
        );

        export default Button_wore;
        
        
         */
}
