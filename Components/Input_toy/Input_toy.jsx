import React from "react";
import styles from "./Input_toy.module.css";

const Input_toy = () => (
  <div>
    <form className={styles["search-bar"]} action="">
      <input
        className={styles["search-input"]}
        required=""
        name="search"
        type="search"
        autocomplete="off"
      />
      <button type="submit" className={styles["search-btn"]}>
        <span>Search</span>
      </button>
    </form>
  </div>
);

export default Input_toy;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_toy = () => (
         <div>
          <form className="search-bar" action="">
    <input className="search-input" required="" name="search" type="search" autocomplete="off" />
    <button type="submit" className="search-btn">
        <span>Search</span>
    </button>
</form>
        </div>
        );

        export default Input_toy;
        
        
         */
}
