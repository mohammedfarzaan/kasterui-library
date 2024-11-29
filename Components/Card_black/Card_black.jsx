import React from "react";
import styles from "./Card_black.module.css";

const Card_black = () => (
  <div>
    <div className={styles["bgblue"]}>
      <div className={styles["card"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae
        explicabo placeat atque praesentium, dolorum corporis amet non, aliquid
        quasi voluptate delectus nulla exercitationem eius eum, ducimus
        architecto dolores suscipit!
      </div>
    </div>
  </div>
);

export default Card_black;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_black = () => (
         <div>
          <div className="bgblue">
  <div className="card">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae
    explicabo placeat atque praesentium, dolorum corporis amet non, aliquid
    quasi voluptate delectus nulla exercitationem eius eum, ducimus architecto
    dolores suscipit!
  </div>
</div>
        </div>
        );

        export default Card_black;
        
        
         */
}
