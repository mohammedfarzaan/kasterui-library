import React from "react";
import styles from "./Card_danger.module.css";

const Card_danger = () => (
  <div>
    <div className={styles["card"]} style="--rating:90">
      <div className={styles["icon"]}>🫠</div>
      <div className={styles["title"]}>Easy Cheesy</div>
      <p className={styles["description"]}>
        This cheesy, juicy ultimate comforting lunch or quick and easy dinner
        recipe.
      </p>
      <div className={styles["rating"]}></div>
      <a href="#" className={styles["link"]}>
        See the recipe
      </a>
    </div>
  </div>
);

export default Card_danger;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_danger = () => (
         <div>
          <div className="card" style="--rating:90">
  <div className="icon">🫠</div>
  <div className="title">Easy Cheesy</div>
  <p className="description">This cheesy, juicy ultimate comforting lunch or quick and easy dinner recipe.</p>
  <div className="rating"></div>
  <a href="#" className="link">See the recipe</a>
</div>
        </div>
        );

        export default Card_danger;
        
        
         */
}
