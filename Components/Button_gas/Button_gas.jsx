import React from "react";
import styles from "./Button_gas.module.css";

const Button_gas = () => (
  <div>
    <button id="btn-message" className={styles["button-message"]}>
      <div className={styles["content-avatar"]}>
        <div className={styles["status-user"]}></div>
        <div className={styles["avatar"]}>
          <svg
            className="user-img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z"></path>
          </svg>
        </div>
      </div>
      <div className={styles["notice-content"]}>
        <div className={styles["username"]}>Jessica Sanders</div>
        <div className={styles["lable-message"]}>
          Message<span className={styles["number-message"]}>3</span>
        </div>
        <div className={styles["user-id"]}>@jessisanders</div>
      </div>
    </button>
  </div>
);

export default Button_gas;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_gas = () => (
         <div>
          <button id="btn-message" className="button-message">
	<div className="content-avatar">
		<div className="status-user"></div>
		<div className="avatar">
			<svg className="user-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z"></path></svg>
		</div>
	</div>
	<div className="notice-content">
		<div className="username">Jessica Sanders</div>
		<div className="lable-message">Message<span className="number-message">3</span></div>
		<div className="user-id">@jessisanders</div>
	</div>
</button>
        </div>
        );

        export default Button_gas;
        
        
         */
}
