import React from "react";
import styles from "./Card_fence.module.css";

const Card_fence = () => (
  <div>
    <div className={styles["login-card"]}>
      <div className={styles["card-header"]}>
        <h1>Login</h1>
      </div>
      <div className={styles["card-body"]}>
        <form>
          <div className={styles["form-group"]}>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required="" />
          </div>
          <div className={styles["form-group"]}>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required="" />
          </div>
          <div className={styles["form-group"]}>
            <button type="submit" className={styles["login-button"]}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Card_fence;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_fence = () => (
         <div>
          <div className="login-card">
  <div className="card-header">
    <h1>Login</h1>
  </div>
  <div className="card-body">
    <form>
      <div className="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required="" />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required="" />
      </div>
      <div className="form-group">
        <button type="submit" className="login-button">Login</button>
      </div>
    </form>
  </div>
</div>
        </div>
        );

        export default Card_fence;
        
        
         */
}
