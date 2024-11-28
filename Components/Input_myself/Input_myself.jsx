import React from "react";
import styles from "./Input_myself.module.css";

const Input_myself = () => (
  <div>
    <label className={styles["search-label"]}>
      <input
        type="text"
        name="text"
        className={styles["input"]}
        required=""
        placeholder="Type here..."
      />
      <kbd className={styles["slash-icon"]}>/</kbd>
      <svg
        className="search-icon"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="512"
        height="512"
        x="0"
        y="0"
        viewBox="0 0 56.966 56.966"
        style="enable-background:new 0 0 512 512"
        xml:space="preserve"
      >
        <g>
          <path
            d="M55.146 51.887 41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"
            fill="currentColor"
            data-original="#000000"
            className=""
          ></path>
        </g>
      </svg>
    </label>
  </div>
);

export default Input_myself;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_myself = () => (
         <div>
          <label className="search-label">
    <input type="text" name="text" className="input" required="" placeholder="Type here..." />
    <kbd className="slash-icon">/</kbd>
    <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 512 512" xml:space="preserve">
      <g>
        <path d="M55.146 51.887 41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" fill="currentColor" data-original="#000000" className=""></path>
      </g>
    </svg>
  </label>
        </div>
        );

        export default Input_myself;
        
        
         */
}
