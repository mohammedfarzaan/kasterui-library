import React from "react";
import styles from "./Input_wall.module.css";

const Input_wall = () => (
  <div>
    <form>
      <label for="search">Search</label>
      <input
        required=""
        pattern=".*\S.*"
        type="search"
        className={styles["input"]}
        id="search"
      />
      <span className={styles["caret"]}></span>
    </form>
  </div>
);

export default Input_wall;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_wall = () => (
         <div>
          <form>
	<label for="search">Search</label>
	<input required="" pattern=".*\S.*" type="search" className="input" id="search" />
	<span className="caret"></span>
</form>
        </div>
        );

        export default Input_wall;
        
        
         */
}
