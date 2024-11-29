import React from "react";
import styles from "./Card_arrive.module.css";

const Card_arrive = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__body"]}>
        <div className={styles["card__icon"]}>
          <svg
            height="32"
            width="32"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>

        <p className={styles["card__title"]}>Abstract Design</p>
        <p className={styles["card__paragraph"]}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          perferendis eaque dolore repellat numquam. Dolores.
        </p>
      </div>

      <div className={styles["card__ribbon"]}>
        <label className={styles["card__ribbon-label"]}>01</label>
      </div>
    </div>
  </div>
);

export default Card_arrive;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_arrive = () => (
         <div>
          <div className="card">
  <div className="card__body">
    <div className="card__icon">
      <svg
        height="32"
        width="32"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </div>

    <p className="card__title">Abstract Design</p>
    <p className="card__paragraph">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
      perferendis eaque dolore repellat numquam. Dolores.
    </p>
  </div>

  <div className="card__ribbon">
    <label className="card__ribbon-label">01</label>
  </div>
</div>
        </div>
        );

        export default Card_arrive;
        
        
         */
}
