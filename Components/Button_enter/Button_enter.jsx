import React from "react";
import styles from "./Button_enter.module.css";

const Button_enter = () => (
  <div>
    <a className={styles["space-button"]} href="#">
      <svg
        height="24"
        width="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18.5c-4.688 0-8.5-3.812-8.5-8.5s3.812-8.5 8.5-8.5 8.5 3.812 8.5 8.5-3.812 8.5-8.5 8.5zm1.5-10.5h-3v-4.5h-1v4.5h-3l4.5 5z"
          fill="currentColor"
        ></path>
      </svg>
      Explore Space
    </a>
  </div>
);

export default Button_enter;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_enter = () => (
         <div>
          <a className="space-button" href="#">
  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18.5c-4.688 0-8.5-3.812-8.5-8.5s3.812-8.5 8.5-8.5 8.5 3.812 8.5 8.5-3.812 8.5-8.5 8.5zm1.5-10.5h-3v-4.5h-1v4.5h-3l4.5 5z" fill="currentColor"></path></svg>
  Explore Space
</a>
        </div>
        );

        export default Button_enter;
        
        
         */
}
