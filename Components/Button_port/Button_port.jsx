import React from "react";
import styles from "./Button_port.module.css";

const Button_port = () => (
  <div>
    <label for="button" className={styles["label"]}>
      <button id="button" className={styles["button"]} name="button">
        <div className={styles["roundThing"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            fill="none"
            viewBox="0 0 33 32"
            className={styles["svg"]}
          >
            <path
              stroke="#161616"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m10.367 8.427 11.32-3.774c5.08-1.693 7.84 1.08 6.16 6.16l-3.774 11.32c-2.533 7.614-6.693 7.614-9.226 0l-1.12-3.36-3.36-1.12c-7.614-2.533-7.614-6.68 0-9.226ZM13.98 18.2l4.773-4.786"
            ></path>
          </svg>
          <p>Send Message</p>
        </div>
      </button>
    </label>
  </div>
);

export default Button_port;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_port = () => (
         <div>
          <label for="button" className="label">
  <button id="button" className="button" name="button">
    <div className="roundThing">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="32"
        fill="none"
        viewBox="0 0 33 32"
        className="svg"
      >
        <path
          stroke="#161616"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m10.367 8.427 11.32-3.774c5.08-1.693 7.84 1.08 6.16 6.16l-3.774 11.32c-2.533 7.614-6.693 7.614-9.226 0l-1.12-3.36-3.36-1.12c-7.614-2.533-7.614-6.68 0-9.226ZM13.98 18.2l4.773-4.786"
        ></path>
      </svg>
      <p>Send Message</p>
    </div>
  </button>
</label>
        </div>
        );

        export default Button_port;
        
        
         */
}
