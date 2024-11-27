import React from "react";
import styles from "./Button_safety.module.css";

const Button_safety = () => (
  <div>
    <button>
      {" "}
      Enter Room
      <svg
        viewBox="0 0 16 16"
        className="bi bi-arrow-right"
        fill="currentColor"
        height="20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_safety;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_safety = () => (
         <div>
          <button> Enter Room
    <svg viewBox="0 0 16 16" className="bi bi-arrow-right" fill="currentColor" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" fillRule="evenodd"></path>
    </svg>
</button>
        </div>
        );

        export default Button_safety;
        
        
         */
}
