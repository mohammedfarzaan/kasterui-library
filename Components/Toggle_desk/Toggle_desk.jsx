import React from "react";
import styles from "./Toggle_desk.module.css";

const Toggle_desk = () => (
  <div>
    <div className={styles["checkbox-wrapper-11"]}>
      <input value="2" name="r" type="checkbox" id="02-11" />
      <label for="02-11">To-do</label>
    </div>
  </div>
);

export default Toggle_desk;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_desk = () => (
         <div>
          <div className="checkbox-wrapper-11">
  <input value="2" name="r" type="checkbox" id="02-11" />
  <label for="02-11">To-do</label>
</div>
        </div>
        );

        export default Toggle_desk;
        
        
         */
}
