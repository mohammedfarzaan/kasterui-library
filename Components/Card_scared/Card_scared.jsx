import React from "react";
import styles from "./Card_scared.module.css";

const Card_scared = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__content"]}>
        <div className={styles["card__content-heading"]}>
          <h2>Title</h2>
          <br />
        </div>
        <div className={styles["card__content-body"]}>
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className={styles["card__content-footer"]}>
          <button> Yes</button>
          <button> No</button>
        </div>
      </div>
    </div>
  </div>
);

export default Card_scared;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_scared = () => (
         <div>
          <div className="card">
  <div className="card__content">
    <div className="card__content-heading">
      <h2>Title</h2>
      <br />
    </div>
    <div className="card__content-body">
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </div>
    <div className="card__content-footer">
      <button> Yes
      </button>
      <button> No
      </button>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_scared;
        
        
         */
}
