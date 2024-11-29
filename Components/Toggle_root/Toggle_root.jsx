import React from "react";
import styles from "./Toggle_root.module.css";

const Toggle_root = () => (
  <div>
    <label for="checkboxInput" className={styles["bookmark"]}>
      <input type="checkbox" id="checkboxInput" />
      <svg
        width="15"
        viewBox="0 0 50 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["svgIcon"]}
      >
        <path
          d="M46 62.0085L46 3.88139L3.99609 3.88139L3.99609 62.0085L24.5 45.5L46 62.0085Z"
          stroke="black"
          strokeWidth="7"
        ></path>
      </svg>
    </label>
  </div>
);

export default Toggle_root;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_root = () => (
         <div>
          <label for="checkboxInput" className="bookmark">
  <input type="checkbox" id="checkboxInput" />
  <svg
    width="15"
    viewBox="0 0 50 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="svgIcon"
  >
    <path
      d="M46 62.0085L46 3.88139L3.99609 3.88139L3.99609 62.0085L24.5 45.5L46 62.0085Z"
      stroke="black"
      strokeWidth="7"
    ></path>
  </svg>
</label>
        </div>
        );

        export default Toggle_root;
        
        
         */
}
