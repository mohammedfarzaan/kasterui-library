import React from "react";
import styles from "./Button_after.module.css";

const Button_after = () => (
  <div>
    <button className={styles["botao"]}>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mysvg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g id="Interface / Download">
            <path
              id="Vector"
              d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
              stroke="#f1f1f1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>{" "}
        </g>
      </svg>
      <span className={styles["texto"]}>Download</span>
    </button>
  </div>
);

export default Button_after;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_after = () => (
         <div>
          <button className="botao">
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mysvg"><g id="SVGRepo_bgCarrier" strokeWidth="0">
    </g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
       <g id="Interface / Download"> 
       <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke="#f1f1f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
       </path>
    </g> </g>
  </svg>
  <span className="texto">Download</span>
</button>
        </div>
        );

        export default Button_after;
        
        
         */
}
