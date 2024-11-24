import React from "react";
import styles from "./Button_wrote.module.css";

const Button_wrote = () => (
  <div>
    <button>
      {" "}
      Followers
      <span className={styles["followers"]}>&nbsp; 65.7K </span>
    </button>
  </div>
);

export default Button_wrote;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_wrote = () => (
         <div>
          <button> Followers
  <span className="followers">&nbsp; 65.7K </span>
</button>
        </div>
        );

        export default Button_wrote;
        
        
         */
}
