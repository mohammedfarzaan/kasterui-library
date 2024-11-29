import React from "react";
import styles from "./Card_sat.module.css";

const Card_sat = () => (
  <div>
    <section className={styles["card"]}>
      <header>
        <p>Runtime</p>
        <a href="#">Details</a>
      </header>
      <main>
        <p>
          42 <a href="#">ms</a>
        </p>
      </main>
      <footer>
        <a href="#">Beats 92.42%</a>
        <p>of users with JavaScript</p>
      </footer>
    </section>
  </div>
);

export default Card_sat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_sat = () => (
         <div>
          <section className="card">
  <header>
    <p>Runtime</p>
    <a href="#">Details</a>
  </header>
  <main>
    <p>42 <a href="#">ms</a></p>
  </main>
  <footer>
    <a href="#">Beats 92.42%</a><p>of users with JavaScript</p>
  </footer>
</section>
        </div>
        );

        export default Card_sat;
        
        
         */
}
