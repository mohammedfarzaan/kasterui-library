import React from "react";
import styles from "./Button_built.module.css";

const Button_built = () => (
  <div>
    <button>
      <svg
        className={styles["css-i6dzq1"]}
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        strokeWidth="2"
        stroke="#FFFFFF"
        height="24"
        width="24"
        viewBox="0 0 24 24"
      >
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
      </svg>
      Edit
    </button>
  </div>
);

export default Button_built;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_built = () => (
         <div>
          <button>
    <svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="#FFFFFF" height="24" width="24" viewBox="0 0 24 24">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
    Edit
</button>
        </div>
        );

        export default Button_built;
        
        
         */
}
