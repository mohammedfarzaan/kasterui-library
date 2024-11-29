import React from "react";
import styles from "./Card_have.module.css";

const Card_have = () => (
  <div>
    <div className={styles["card"]}>
      <p className={styles["card-title"]}>Card Title</p>
      <p className={styles["card-des"]}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        deleniti officia. Aliquam repellendus illum pariatur nesciunt dolor et
        natus consectetur repudiandae suscipit autem distinctio commodi vel sed,
        id inventore modi.
      </p>
      <p className={styles["card-text"]}>
        <span>View More</span>
        <svg
          className={styles["arrow-icon"]}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
          ></path>
        </svg>
      </p>
    </div>
  </div>
);

export default Card_have;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_have = () => (
         <div>
          <div className="card">
      <p className="card-title">Card Title</p>
      <p className="card-des">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        deleniti officia. Aliquam repellendus illum pariatur nesciunt dolor et
        natus consectetur repudiandae suscipit autem distinctio commodi vel sed,
        id inventore modi.
      </p>
      <p className="card-text">
        <span>View More</span>
        <svg className="arrow-icon" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
        </svg>
      </p>
    </div>
        </div>
        );

        export default Card_have;
        
        
         */
}
