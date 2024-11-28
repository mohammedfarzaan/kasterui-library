import React from "react";
import styles from "./Button_shown.module.css";

const Button_shown = () => (
  <div>
    <button>
      {" "}
      Followers
      <span className={styles["followers"]}>&nbsp; 65.7K </span>
    </button>
  </div>
);

export default Button_shown;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_shown = () => (
         <div>
          <button> Followers
  <span className="followers">&nbsp; 65.7K </span>
</button>
        </div>
        );

        export default Button_shown;
        
        
         */
}
