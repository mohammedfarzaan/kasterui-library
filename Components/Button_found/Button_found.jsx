import React from "react";
import styles from "./Button_found.module.css";

const Button_found = () => (
  <div>
    <button className={styles["button"]}>
      <p className={styles["text"]}>Button</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="svg"
      >
        <path
          className="path"
          transform="translate(100 100)"
          d="M56.8,-23.9C61.7,-3.2,45.7,18.8,26.5,31.7C7.2,44.6,-15.2,48.2,-35.5,36.5C-55.8,24.7,-73.9,-2.6,-67.6,-25.2C-61.3,-47.7,-30.6,-65.6,-2.4,-64.8C25.9,-64.1,51.8,-44.7,56.8,-23.9Z"
          fill="#4073ff"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_found;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_found = () => (
         <div>
          <button className="button">
  <p className="text">Button</p>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="svg">
    <path className="path" transform="translate(100 100)" d="M56.8,-23.9C61.7,-3.2,45.7,18.8,26.5,31.7C7.2,44.6,-15.2,48.2,-35.5,36.5C-55.8,24.7,-73.9,-2.6,-67.6,-25.2C-61.3,-47.7,-30.6,-65.6,-2.4,-64.8C25.9,-64.1,51.8,-44.7,56.8,-23.9Z" fill="#4073ff"></path>
  </svg>
</button>
        </div>
        );

        export default Button_found;
        
        
         */
}
