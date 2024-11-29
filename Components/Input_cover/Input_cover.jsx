import React from "react";
import styles from "./Input_cover.module.css";

const Input_cover = () => (
  <div>
    <div className={styles["inputContainer"]}>
      <input
        required="required"
        id="inputField"
        placeholder="Username"
        type="text"
      />
      <label className={styles["usernameLabel"]} for="inputField">
        Username
      </label>
      <svg viewBox="0 0 448 512" className={styles["userIcon"]}>
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
      </svg>
    </div>
  </div>
);

export default Input_cover;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_cover = () => (
         <div>
          <div className="inputContainer">
        <input required="required" id="inputField" placeholder="Username" type="text" />
        <label className="usernameLabel" for="inputField">Username</label>
        <svg viewBox="0 0 448 512" className="userIcon"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>
    </div>
        </div>
        );

        export default Input_cover;
        
        
         */
}
