import React from "react";
import styles from "./Button_belong.module.css";

const Button_belong = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        className="svg-icon"
        fill="none"
        height="20"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="m9.99998 4.16667c1.38072 0 2.50002 1.11929 2.50002 2.5 0 .85577-.4293 1.6115-1.088 2.06341l-.4536.31125.1079.53934 1.2505 6.25263h-4.63366l1.25051-6.25263.10791-.53934-.45358-.31125c-.65876-.45191-1.088-1.20764-1.088-2.06341 0-1.38071 1.11925-2.5 2.5-2.5zm-2.31684 11.66663-.19934.9968-.81715-.1634v-.8334zm5.65016.8334v-.8334h-1.0165l.1993.9968zm.8172-.1634.1993.9967h-1.0165-6.66665-1.0165l.19935-.9967 1.35023-6.75127c.14013.12727.28892.24506.44536.35237l.47144-.68715-.81716-.16342-.09964.4982c-.83832-.76139-1.36642-1.86163-1.36642-3.08536 0-2.30119 1.86549-4.16667 4.16667-4.16667 2.30112 0 4.16662 1.86548 4.16662 4.16667 0 1.22374-.5281 2.32399-1.3664 3.08538l-.0996-.49822-.8172.16342-.4714-.68717.4714.68717-.8171.16342.8171-.16342.4715.68715c.1564-.1073.3052-.22509.4453-.35235z"
          fill="#fff"
          fillRule="evenodd"
        ></path>
      </svg>
      <span className={styles["lable"]}>Key</span>
    </button>
  </div>
);

export default Button_belong;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_belong = () => (
         <div>
          <button className="button">
  <svg className="svg-icon" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m9.99998 4.16667c1.38072 0 2.50002 1.11929 2.50002 2.5 0 .85577-.4293 1.6115-1.088 2.06341l-.4536.31125.1079.53934 1.2505 6.25263h-4.63366l1.25051-6.25263.10791-.53934-.45358-.31125c-.65876-.45191-1.088-1.20764-1.088-2.06341 0-1.38071 1.11925-2.5 2.5-2.5zm-2.31684 11.66663-.19934.9968-.81715-.1634v-.8334zm5.65016.8334v-.8334h-1.0165l.1993.9968zm.8172-.1634.1993.9967h-1.0165-6.66665-1.0165l.19935-.9967 1.35023-6.75127c.14013.12727.28892.24506.44536.35237l.47144-.68715-.81716-.16342-.09964.4982c-.83832-.76139-1.36642-1.86163-1.36642-3.08536 0-2.30119 1.86549-4.16667 4.16667-4.16667 2.30112 0 4.16662 1.86548 4.16662 4.16667 0 1.22374-.5281 2.32399-1.3664 3.08538l-.0996-.49822-.8172.16342-.4714-.68717.4714.68717-.8171.16342.8171-.16342.4715.68715c.1564-.1073.3052-.22509.4453-.35235z" fill="#fff" fillRule="evenodd"></path></svg>
  <span className="lable">Key</span>
</button>
        </div>
        );

        export default Button_belong;
        
        
         */
}
