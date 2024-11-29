import React from "react";
import styles from "./Card_late.module.css";

const Card_late = () => (
  <div>
    <div className={styles["chat-card"]}>
      <div className={styles["chat-header"]}>
        <div className={styles["h2"]}>ChatGPT</div>
      </div>
      <div className={styles["chat-body"]}>
        <div className={styles["message"] + styles["incoming"]}>
          <p>Hello, how can I assist you today?</p>
        </div>
        <div className={styles["message"] + styles["outgoing"]}>
          <p>I have a question about your services.</p>
        </div>
        <div className={styles["message"] + styles["incoming"]}>
          <p>Sure, I'm here to help. What would you like to know?</p>
        </div>
      </div>
      <div className={styles["chat-footer"]}>
        <input placeholder="Type your message" type="text" />
        <button>Send</button>
      </div>
    </div>
  </div>
);

export default Card_late;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_late = () => (
         <div>
          <div className="chat-card">
  <div className="chat-header">
   <div className="h2">ChatGPT</div>
  </div>
  <div className="chat-body">
    <div className="message incoming">
      <p>Hello, how can I assist you today?</p>
    </div>
    <div className="message outgoing">
      <p>I have a question about your services.</p>
    </div>
    <div className="message incoming">
      <p>Sure, I'm here to help. What would you like to know?</p>
    </div>
    
  </div>
  <div className="chat-footer">
    <input placeholder="Type your message" type="text" />
    <button>Send</button>
  </div>
</div>
        </div>
        );

        export default Card_late;
        
        
         */
}
