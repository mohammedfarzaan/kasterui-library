import React from "react";
import styles from "./Card_mother.module.css";

const Card_mother = () => (
  <div>
    <div className={styles["wrapper"]}>
      <div className={styles["circle-1"]}></div>
      <div className={styles["circle-2"]}></div>
      <div className={styles["card"]}>
        <section className={styles["top"]}>
          <span className={styles["u-l"]}>User list:</span>
        </section>
        <section className={styles["bottom"]}>
          <ul className={styles["users"]}>
            <li className={styles["user"]}>
              <span className={styles["user-name"]}>Olivia Anderson</span>
              <span className={styles["user-occupation"]}>
                Marketing Manager
              </span>
            </li>
            <li className={styles["user"]}>
              <span className={styles["user-name"]}>Ethan Murphy</span>
              <span className={styles["user-occupation"]}>
                Graphic Designer
              </span>
            </li>
            <li className={styles["user"]}>
              <span className={styles["user-name"]}>Ava Collins</span>
              <span className={styles["user-occupation"]}>
                Financial Analyst
              </span>
            </li>
            <li className={styles["user"]}>
              <span className={styles["user-name"]}>Noah Walker</span>
              <span className={styles["user-occupation"]}>Journalist</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default Card_mother;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_mother = () => (
         <div>
          <div className="wrapper">
<div className="circle-1"></div>
<div className="circle-2"></div>
<div className="card">
  <section className="top">
    <span className="u-l">User list:</span>
  </section>
  <section className="bottom">
    <ul className="users">
      <li className="user">
        <span className="user-name">Olivia Anderson</span>
        <span className="user-occupation">Marketing Manager</span>
      </li>
      <li className="user">
        <span className="user-name">Ethan Murphy</span>
        <span className="user-occupation">Graphic Designer</span>
      </li>
      <li className="user">
        <span className="user-name">Ava Collins</span>
        <span className="user-occupation">Financial Analyst</span>
      </li>
      <li className="user">
        <span className="user-name">Noah Walker</span>
        <span className="user-occupation">Journalist</span>
      </li>
    </ul>
  </section>
</div>
</div>
        </div>
        );

        export default Card_mother;
        
        
         */
}
