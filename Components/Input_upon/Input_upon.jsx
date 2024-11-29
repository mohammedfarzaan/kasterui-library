import React from "react";
import styles from "./Input_upon.module.css";

const Input_upon = () => (
  <div>
    <div className={styles["form-control"]}>
      <input type="value" required="" />
      <label>
        <span style="transition-delay:0ms">U</span>
        <span style="transition-delay:50ms">s</span>
        <span style="transition-delay:100ms">e</span>
        <span style="transition-delay:150ms">r</span>
        <span style="transition-delay:200ms">n</span>
        <span style="transition-delay:250ms">a</span>
        <span style="transition-delay:300ms">m</span>
        <span style="transition-delay:350ms">e</span>
      </label>
    </div>
  </div>
);

export default Input_upon;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_upon = () => (
         <div>
          <div className="form-control">
    <input type="value" required="" />
    <label>
        <span style="transition-delay:0ms">U</span><span style="transition-delay:50ms">s</span><span style="transition-delay:100ms">e</span><span style="transition-delay:150ms">r</span><span style="transition-delay:200ms">n</span><span style="transition-delay:250ms">a</span><span style="transition-delay:300ms">m</span><span style="transition-delay:350ms">e</span>
    </label>
</div>
        </div>
        );

        export default Input_upon;
        
        
         */
}
