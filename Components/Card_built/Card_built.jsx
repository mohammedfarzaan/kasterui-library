import React from "react";
import styles from "./Card_built.module.css";

const Card_built = () => (
  <div>
    <div className={styles["card-container"]}>
      <div className={styles["circle1"]}></div>
      <div className={styles["circle2"]}></div>
      <div className={styles["container"]}>
        <div className={styles["log-card"]}>
          <p className={styles["heading"]}>Welcome Back</p>
          <p>We are you to have you Again</p>

          <div className={styles["input-group"]}>
            <p className={styles["text"]}>Username</p>
            <input
              className={styles["input"]}
              type="username"
              placeholder="For Ex: Jayakrishna007"
            />
            <p className={styles["text"]}>Password</p>
            <input
              className={styles["input"]}
              type="password"
              placeholder="Enter Password"
            />
          </div>

          <div className={styles["password-group"]}>
            <div className={styles["checkbox-group"]}>
              <input type="checkbox" />
              <label className={styles["label"]}>Remember Me</label>
            </div>
            <a href="" className={styles["forget-password"]}>
              Forget Password
            </a>
          </div>

          <button className={styles["btn"]}>Sign In</button>

          <p className={styles["no-account"]}>
            Don't Have an Account ?<a className={styles["link"]}> Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Card_built;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_built = () => (
         <div>
          <div className="card-container">
    <div className="circle1"></div>
    <div className="circle2"></div>
    <div className="container">
        <div className="log-card">
    <p className="heading">Welcome Back</p>
    <p>We are you to have you Again</p>

    <div className="input-group">
        <p className="text">Username</p>
        <input className="input" type="username" placeholder="For Ex: Jayakrishna007" />
        <p className="text">Password</p>
        <input className="input" type="password" placeholder="Enter Password" />
    </div>

    <div className="password-group">
        <div className="checkbox-group">
            <input type="checkbox" />
            <label className="label">Remember Me</label>
        </div>
            <a href="" className="forget-password">Forget Password</a>
    </div>

    <button className="btn">Sign In</button>

    <p className="no-account">Don't Have an Account ?<a className="link"> Sign Up</a></p>
</div>
    </div>
</div>
        </div>
        );

        export default Card_built;
        
        
         */
}
