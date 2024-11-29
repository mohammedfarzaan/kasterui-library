import React from "react";
import styles from "./Card_entire.module.css";

const Card_entire = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["header"]}>
        <span className={styles["icon"]}>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
        <p className={styles["alert"]}>New message!</p>
      </div>

      <p className={styles["message"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo
        unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
      </p>

      <div className={styles["actions"]}>
        <a className={styles["read"]} href="">
          Take a Look
        </a>

        <a className={styles["mark-as-read"]} href="">
          Mark as Read
        </a>
      </div>
    </div>
  </div>
);

export default Card_entire;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_entire = () => (
         <div>
          <div className="card">
  <div className="header">
    <span className="icon">
      <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" fillRule="evenodd"></path>
      </svg>
    </span>
    <p className="alert">New message!</p>
  </div>

  <p className="message">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde
    vel adipisci blanditiis voluptates eum. Nam, cum minima?
  </p>

  <div className="actions">
    <a className="read" href="">
      Take a Look
    </a>

    <a className="mark-as-read" href="">
      Mark as Read
    </a>
  </div>
</div>
        </div>
        );

        export default Card_entire;
        
        
         */
}
