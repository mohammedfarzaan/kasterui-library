import React from "react";
import styles from "./Card_got.module.css";

const Card_got = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__date"]}>
        <span className={styles["time"]}>14:34</span>
        <span className={styles["date"]}>Mon.,21 August</span>
      </div>
      <div className={styles["popup"]}>
        <p className={styles["title"]}>Software update</p>
        <p>Postponed update</p>
      </div>
    </div>
  </div>
);

export default Card_got;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_got = () => (
         <div>
          <div className="card">

  <div className="card__date">
    <span className="time">14:34</span>
    <span className="date">Mon.,21 August</span>
  </div>
    <div className="popup">
        <p className="title">Software update</p>
        <p>Postponed update</p>
    </div>

</div>
        </div>
        );

        export default Card_got;
        
        
         */
}
