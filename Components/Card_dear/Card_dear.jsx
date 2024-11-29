import React from "react";
import styles from "./Card_dear.module.css";

const Card_dear = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["one"]}>
        <span className={styles["title"]}>Music</span>
        <div className={styles["music"]}>
          <svg
            viewBox="0 0 16 16"
            className={styles["note"] + styles["bi"] + styles["bi-music-note"]}
            fill="currentColor"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z"></path>
            <path d="M9 3v10H8V3h1z" fillRule="evenodd"></path>
            <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z"></path>
          </svg>
        </div>
        <span className={styles["name"]}>
          <div></div>
          One piece first ending
        </span>
        <span className={styles["name1"]}>
          <div></div>
          Desconhecido
        </span>
        <div className={styles["bar"]}>
          <svg
            viewBox="0 0 16 16"
            className={
              styles["color"] + styles["bi"] + styles["bi-fast-forward-fill"]
            }
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"></path>
            <path d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"></path>
          </svg>
          <svg
            viewBox="0 0 16 16"
            className={
              styles["color"] + styles["bi"] + styles["bi-caret-right-fill"]
            }
            fill="currentColor"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
          </svg>
          <svg
            viewBox="0 0 16 16"
            className={
              styles["color"] + styles["bi"] + styles["bi-fast-forward-fill"]
            }
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"></path>
            <path d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"></path>
          </svg>
        </div>
        <div className={styles["bar"]}>
          <svg
            viewBox="0 0 16 16"
            className={styles["color1"] + styles["bi"] + styles["bi-shuffle"]}
            fill="currentColor"
            height="14"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
              fillRule="evenodd"
            ></path>
            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"></path>
          </svg>
          <svg
            viewBox="0 0 16 16"
            className={
              styles["color1"] + styles["bi"] + styles["bi-music-note-list"]
            }
            fill="currentColor"
            height="14"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"></path>
            <path d="M12 3v10h-1V3h1z" fillRule="evenodd"></path>
            <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"></path>
            <path
              d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
              fillRule="evenodd"
            ></path>
          </svg>
          <svg
            viewBox="0 0 16 16"
            className={
              styles["color1"] + styles["bi"] + styles["bi-suit-heart"]
            }
            fill="currentColor"
            height="14"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"></path>
          </svg>
          <svg
            viewBox="0 0 16 16"
            className={
              styles["color1"] + styles["bi"] + styles["bi-arrow-right"]
            }
            fill="currentColor"
            height="14"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className={styles["two"]}></div>
      <div className={styles["three"]}></div>
    </div>
  </div>
);

export default Card_dear;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_dear = () => (
         <div>
          <div className="card">
  <div className="one">
    <span className="title">Music</span>
    <div className="music">
      <svg
        viewBox="0 0 16 16"
        className="note bi bi-music-note"
        fill="currentColor"
        height="18"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z"
        ></path>
        <path d="M9 3v10H8V3h1z" fillRule="evenodd"></path>
        <path
          d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z"
        ></path>
      </svg>
    </div>
    <span className="name"
      ><div></div>
      One piece first ending</span
    >
    <span className="name1"
      ><div></div>
      Desconhecido</span
    >
    <div className="bar">
      <svg
        viewBox="0 0 16 16"
        className="color bi bi-fast-forward-fill"
        fill="currentColor"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"
        ></path>
        <path
          d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"
        ></path>
      </svg>
      <svg
        viewBox="0 0 16 16"
        className="color bi bi-caret-right-fill"
        fill="currentColor"
        height="18"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
        ></path>
      </svg>
      <svg
        viewBox="0 0 16 16"
        className="color bi bi-fast-forward-fill"
        fill="currentColor"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"
        ></path>
        <path
          d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"
        ></path>
      </svg>
    </div>
    <div className="bar">
      <svg
        viewBox="0 0 16 16"
        className="color1 bi bi-shuffle"
        fill="currentColor"
        height="14"
        width="14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
          fillRule="evenodd"
        ></path>
        <path
          d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"
        ></path>
      </svg>
      <svg
        viewBox="0 0 16 16"
        className="color1 bi bi-music-note-list"
        fill="currentColor"
        height="14"
        width="14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"
        ></path>
        <path d="M12 3v10h-1V3h1z" fillRule="evenodd"></path>
        <path
          d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"
        ></path>
        <path
          d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
          fillRule="evenodd"
        ></path>
      </svg>
      <svg
        viewBox="0 0 16 16"
        className="color1 bi bi-suit-heart"
        fill="currentColor"
        height="14"
        width="14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"
        ></path>
      </svg>
      <svg
        viewBox="0 0 16 16"
        className="color1 bi bi-arrow-right"
        fill="currentColor"
        height="14"
        width="14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          fillRule="evenodd"
        ></path>
      </svg>
    </div>
  </div>
  <div className="two"></div>
  <div className="three"></div>
</div>
        </div>
        );

        export default Card_dear;
        
        
         */
}
