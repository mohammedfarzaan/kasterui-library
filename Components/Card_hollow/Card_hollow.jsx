import React from "react";
import styles from "./Card_hollow.module.css";

const Card_hollow = () => (
  <div>
    <div className={styles["card-container"]}>
      <div className={styles["card-header"]}>
        <div className={styles["img-avatar"]}></div>
        <div className={styles["text-chat"]}>Chat</div>
      </div>
      <div className={styles["card-body"]}>
        <div className={styles["messages-container"]}>
          <div className={styles["message-box"] + styles["left"]}>
            <p>Hello, How are you?</p>
          </div>
          <div className={styles["message-box"] + styles["right"]}>
            <p>I'm good, thanks for asking! How about you?</p>
          </div>
        </div>
        <div className={styles["message-input"]}>
          <form>
            <textarea
              placeholder="Type your message here"
              className={styles["message-send"]}
            ></textarea>
            <button type="submit" className={styles["button-send"]}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Card_hollow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_hollow = () => (
         <div>
          <div className="card-container">
  <div className="card-header">
    <div className="img-avatar"></div>
    <div className="text-chat">Chat</div>
  </div>
  <div className="card-body">
    <div className="messages-container">
        <div className="message-box left">
            <p>Hello, How are you?</p>
        </div>
        <div className="message-box right">
            <p>I'm good, thanks for asking! How about you?</p>
        </div>
    </div>
    <div className="message-input">
      <form>
        <textarea placeholder="Type your message here" className="message-send"></textarea>
        <button type="submit" className="button-send">Send</button>
      </form>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_hollow;
        
        
         */
}
