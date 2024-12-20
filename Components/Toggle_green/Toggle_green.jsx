import React from "react";
import styles from "./Toggle_green.module.css";

const Toggle_green = () => (
  <div>
    <div className={styles["toggler"]}>
      <input id="toggler-1" name="toggler-1" type="checkbox" value="1" />
      <label for="toggler-1">
        <svg
          className={styles["toggler-on"]}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130.2 130.2"
        >
          <polyline
            className={styles["path"] + styles["check"]}
            points="100.2,40.2 51.5,88.8 29.8,67.5"
          ></polyline>
        </svg>
        <svg
          className={styles["toggler-off"]}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130.2 130.2"
        >
          <line
            className={styles["path"] + styles["line"]}
            x1="34.4"
            y1="34.4"
            x2="95.8"
            y2="95.8"
          ></line>
          <line
            className={styles["path"] + styles["line"]}
            x1="95.8"
            y1="34.4"
            x2="34.4"
            y2="95.8"
          ></line>
        </svg>
      </label>
    </div>
  </div>
);

export default Toggle_green;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_green = () => (
         <div>
          <div className="toggler">
    <input id="toggler-1" name="toggler-1" type="checkbox" value="1" />
    <label for="toggler-1">
        <svg className="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
            <polyline className="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
        </svg>
        <svg className="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
            <line className="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
            <line className="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
        </svg>
    </label>
</div>
        </div>
        );

        export default Toggle_green;
        
        
         */
}
