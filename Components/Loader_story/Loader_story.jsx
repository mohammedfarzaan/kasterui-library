import React from "react";
import styles from "./Loader_story.module.css";

const Loader_story = () => (
  <div>
    <div className={styles["loader"]}>
      <span id="one"></span>
      <span id="two"></span>
      <span id="three"></span>
    </div>
  </div>
);

export default Loader_story;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_story = () => (
         <div>
          <div className="loader"> 
  <span id="one"></span>
  <span id="two"></span>
  <span id="three"></span>
</div>
        </div>
        );

        export default Loader_story;
        
        
         */
}
