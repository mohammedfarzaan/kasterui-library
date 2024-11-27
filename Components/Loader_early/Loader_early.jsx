import React from "react";
import styles from "./Loader_early.module.css";

const Loader_early = () => (
  <div>
    <div className={styles["pl"]}>
      <div className={styles["pl__dot"]}></div>
      <div className={styles["pl__dot"]}></div>
      <div className={styles["pl__dot"]}></div>
      <div className={styles["pl__dot"]}></div>
      <div className={styles["pl__dot"]}></div>
      <div className={styles["pl__dot"]}></div>
      <div className={styles["pl__dot"]}></div>
      <div className={styles["pl__dot"]}></div>
      <div className={styles["pl__dot"]}></div>
      <div className={styles["pl__dot"]}></div>
      <div className={styles["pl__dot"]}></div>
      <div className={styles["pl__dot"]}></div>
      <div className={styles["pl__text"]}>Loading…</div>
    </div>
  </div>
);

export default Loader_early;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_early = () => (
         <div>
          <div className="pl">
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__text">Loading…</div>
</div>
        </div>
        );

        export default Loader_early;
        
        
         */
}
