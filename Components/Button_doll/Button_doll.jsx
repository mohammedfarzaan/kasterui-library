import React from "react";
import styles from "./Button_doll.module.css";

const Button_doll = () => (
  <div>
    <button>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
          ></path>
        </svg>{" "}
        Create
      </span>
    </button>
  </div>
);

export default Button_doll;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_doll = () => (
         <div>
          <button>
  <span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create
  </span>
</button>
        </div>
        );

        export default Button_doll;
        
        
         */
}
