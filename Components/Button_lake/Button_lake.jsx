import React from "react";
import styles from "./Button_lake.module.css";

const Button_lake = () => (
  <div>
    <button className={styles["button"]}>
      <p className={styles["text"]}>Download</p>
      <div className={styles["svg"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          className={styles["bi"] + styles["bi-download"]}
          viewBox="0 0 16 16"
        >
          {" "}
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>{" "}
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>{" "}
        </svg>
      </div>
    </button>
  </div>
);

export default Button_lake;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_lake = () => (
         <div>
          <button className="button">
  <p className="text">
  Download 
  </p>
  <div className="svg">
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-download" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path> </svg>
  </div>
</button>
        </div>
        );

        export default Button_lake;
        
        
         */
}
