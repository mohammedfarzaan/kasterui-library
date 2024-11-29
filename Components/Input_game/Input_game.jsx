import React from "react";
import styles from "./Input_game.module.css";

const Input_game = () => (
  <div>
    <input
      type="text"
      name="text"
      className={styles["search-bar"]}
      placeholder="Type something"
    />
  </div>
);

export default Input_game;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_game = () => (
         <div>
          <input
  type="text"
  name="text"
  className="search-bar"
  placeholder="Type something"
/>
        </div>
        );

        export default Input_game;
        
        
         */
}
