import React from "react";
import styles from "./Card_fast.module.css";

const Card_fast = () => (
  <div>
    <div className={styles["cookieCard"]}>
      <p className={styles["cookieHeading"]}>Cookies.</p>
      <p className={styles["cookieDescription"]}>
        By using this website you automatically accept that we use cookies.{" "}
        <a href="#">What for?</a>
      </p>
      <button className={styles["acceptButton"]}>Understood</button>
    </div>
  </div>
);

export default Card_fast;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_fast = () => (
         <div>
          <div className="cookieCard">
  <p className="cookieHeading">Cookies.</p>
  <p className="cookieDescription">By using this website you automatically accept that we use cookies. <a href="#">What for?</a></p>
  <button className="acceptButton">Understood</button>
</div>
        </div>
        );

        export default Card_fast;
        
        
         */
}
