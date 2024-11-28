import React from "react";
import styles from "./Input_fine.module.css";

const Input_fine = () => (
  <div>
    <form className={styles["container"]} action="#">
      <input
        placeholder="im an input!"
        className={styles["input"]}
        name="text"
        type="text"
      />
      <button className={styles["button"]} type="submit">
        submit
      </button>
    </form>
  </div>
);

export default Input_fine;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_fine = () => (
         <div>
          <form className="container" action="#">
<input placeholder="im an input!" className="input" name="text" type="text" />
<button className="button" type="submit">submit</button>
</form>
        </div>
        );

        export default Input_fine;
        
        
         */
}
