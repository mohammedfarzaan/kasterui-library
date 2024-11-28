import React from "react";
import styles from "./Input_deal.module.css";

const Input_deal = () => (
  <div>
    <input
      type="text"
      name="text"
      className={styles["search-bar"]}
      placeholder="Type something"
    />
  </div>
);

export default Input_deal;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_deal = () => (
         <div>
          <input
  type="text"
  name="text"
  className="search-bar"
  placeholder="Type something"
/>
        </div>
        );

        export default Input_deal;
        
        
         */
}
