import React from "react";
import styles from "./Input_coach.module.css";

const Input_coach = () => (
  <div>
    <div className={styles["ui-wrapper"]}>
      <input checked="" id="Austria" name="flag" type="radio" />
      <input id="Belgium" name="flag" type="radio" />
      <input id="Bulgaria" name="flag" type="radio" />
      <input id="Croatia" name="flag" type="radio" />
      <input id="Cyprus" name="flag" type="radio" />
      <input id="Czech" name="flag" type="radio" />
      <input id="Denmark" name="flag" type="radio" />
      <input id="Estonia" name="flag" type="radio" />
      <input id="Finland" name="flag" type="radio" />
      <input id="France" name="flag" type="radio" />
      <input id="Germany" name="flag" type="radio" />
      <input id="Greece" name="flag" type="radio" />
      <input id="Hungary" name="flag" type="radio" />
      <input id="Iceland" name="flag" type="radio" />
      <input id="Ireland" name="flag" type="radio" />
      <input id="Italy" name="flag" type="radio" />
      <input id="Latvia" name="flag" type="radio" />
      <input id="Liechtenstein" name="flag" type="radio" />
      <input id="Lithuania" name="flag" type="radio" />
      <input id="Luxembourg" name="flag" type="radio" />
      <input id="Malta" name="flag" type="radio" />
      <input id="Netherlands" name="flag" type="radio" />
      <input id="Norway" name="flag" type="radio" />
      <input id="Poland" name="flag" type="radio" />
      <input id="Portugal" name="flag" type="radio" />
      <input id="Romania" name="flag" type="radio" />
      <input id="Slovakia" name="flag" type="radio" />
      <input id="Slovenia" name="flag" type="radio" />
      <input id="Spain" name="flag" type="radio" />
      <input id="Sweden" name="flag" type="radio" />
      <input
        className={styles["dropdown-checkbox"]}
        name="dropdown"
        id="dropdown"
        type="checkbox"
      />
      <label className={styles["dropdown-container"]} for="dropdown"></label>
      <div className={styles["input-wrapper"]}>
        <legend>
          <label for="phonenumber">Phonenumber*</label>
        </legend>
        <div className={styles["textfield"]}>
          <input pattern="\d+" maxlength="11" id="phonenumber" type="text" />
          <span className={styles["invalid-msg"]}>
            This is not a valid phone number
          </span>
        </div>
      </div>
      <div className={styles["select-wrapper"]}>
        <ul>
          <li className={styles["Austria"]}>
            <label for="Austria">
              <span>🇦🇹</span>Austria (+43)
            </label>
          </li>
          <li className={styles["Belgium"]}>
            <label for="Belgium">
              <span>🇧🇪</span>Belgium (+32)
            </label>
          </li>
          <li className={styles["Bulgaria"]}>
            <label for="Bulgaria">
              <span>🇧🇬</span>Bulgaria (+359)
            </label>
          </li>
          <li className={styles["Croatia"]}>
            <label for="Croatia">
              <span>🇭🇷</span>Croatia (+385)
            </label>
          </li>
          <li className={styles["Cyprus"]}>
            <label for="Cyprus">
              <span>🇨🇾</span>Cyprus (+357)
            </label>
          </li>
          <li className={styles["Czech"]}>
            <label for="Czech">
              <span>🇨🇿</span>Czech Republic (+420)
            </label>
          </li>
          <li className={styles["Denmark"]}>
            <label for="Denmark">
              <span>🇩🇰</span>Denmark (+45)
            </label>
          </li>
          <li className={styles["Estonia"]}>
            <label for="Estonia">
              <span>🇪🇪</span>Estonia (+372)
            </label>
          </li>
          <li className={styles["Finland"]}>
            <label for="Finland">
              <span>🇫🇮</span>Finland (+358)
            </label>
          </li>
          <li className={styles["France"]}>
            <label for="France">
              <span>🇫🇷</span>France (+33)
            </label>
          </li>
          <li className={styles["Germany"]}>
            <label for="Germany">
              <span>🇩🇪</span>Germany (+49)
            </label>
          </li>
          <li className={styles["Greece"]}>
            <label for="Greece">
              <span>🇬🇷</span>Greece (+30)
            </label>
          </li>
          <li className={styles["Hungary"]}>
            <label for="Hungary">
              <span>🇭🇺</span>Hungary (+36)
            </label>
          </li>
          <li className={styles["Iceland"]}>
            <label for="Iceland">
              <span>🇮🇸</span>Iceland (+354)
            </label>
          </li>
          <li className={styles["Ireland"]}>
            <label for="Ireland">
              <span>🇮🇪</span>Republic of Ireland (+353)
            </label>
          </li>
          <li className={styles["Italy"]}>
            <label for="Italy">
              <span>🇮🇹</span>Italy (+39)
            </label>
          </li>
          <li className={styles["Latvia"]}>
            <label for="Latvia">
              <span>🇱🇻</span>Latvia (+371)
            </label>
          </li>
          <li className={styles["Liechtenstein"]}>
            <label for="Liechtenstein">
              <span>🇱🇮</span>Liechtenstein (+423)
            </label>
          </li>
          <li className={styles["Lithuania"]}>
            <label for="Lithuania">
              <span>🇱🇹</span>Lithuania (+370)
            </label>
          </li>
          <li className={styles["Luxembourg"]}>
            <label for="Luxembourg">
              <span>🇱🇺</span>Luxembourg (+352)
            </label>
          </li>
          <li className={styles["Malta"]}>
            <label for="Malta">
              <span>🇲🇹</span>Malta (+356)
            </label>
          </li>
          <li className={styles["Netherlands"]}>
            <label for="Netherlands">
              <span>🇳🇱</span>Netherlands (+31)
            </label>
          </li>
          <li className={styles["Norway"]}>
            <label for="Norway">
              <span>🇳🇴</span>Norway (+47)
            </label>
          </li>
          <li className={styles["Poland"]}>
            <label for="Poland">
              <span>🇵🇱</span>Poland (+48)
            </label>
          </li>
          <li className={styles["Portugal"]}>
            <label for="Portugal">
              <span>🇵🇹</span>Portugal (+351)
            </label>
          </li>
          <li className={styles["Romania"]}>
            <label for="Romania">
              <span>🇷🇴</span>Romania (+40)
            </label>
          </li>
          <li className={styles["Slovakia"]}>
            <label for="Slovakia">
              <span>🇸🇰</span>Slovakia (+421)
            </label>
          </li>
          <li className={styles["Slovenia"]}>
            <label for="Slovenia">
              <span>🇸🇮</span>Slovenia (+386)
            </label>
          </li>
          <li className={styles["Spain"]}>
            <label for="Spain">
              <span>🇪🇸</span>Spain (+34)
            </label>
          </li>
          <li className={styles["Sweden"]}>
            <label for="Sweden">
              <span>🇸🇪</span>Sweden (+46)
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Input_coach;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_coach = () => (
         <div>
          <div className="ui-wrapper">
    <input checked="" id="Austria" name="flag" type="radio" />
    <input id="Belgium" name="flag" type="radio" />
    <input id="Bulgaria" name="flag" type="radio" />
    <input id="Croatia" name="flag" type="radio" />
    <input id="Cyprus" name="flag" type="radio" />
    <input id="Czech" name="flag" type="radio" />
    <input id="Denmark" name="flag" type="radio" />
    <input id="Estonia" name="flag" type="radio" />
    <input id="Finland" name="flag" type="radio" />
    <input id="France" name="flag" type="radio" />
    <input id="Germany" name="flag" type="radio" />
    <input id="Greece" name="flag" type="radio" />
    <input id="Hungary" name="flag" type="radio" />
    <input id="Iceland" name="flag" type="radio" />
    <input id="Ireland" name="flag" type="radio" />
    <input id="Italy" name="flag" type="radio" />
    <input id="Latvia" name="flag" type="radio" />
    <input id="Liechtenstein" name="flag" type="radio" />
    <input id="Lithuania" name="flag" type="radio" />
    <input id="Luxembourg" name="flag" type="radio" />
    <input id="Malta" name="flag" type="radio" />
    <input id="Netherlands" name="flag" type="radio" />
    <input id="Norway" name="flag" type="radio" />
    <input id="Poland" name="flag" type="radio" />
    <input id="Portugal" name="flag" type="radio" />
    <input id="Romania" name="flag" type="radio" />
    <input id="Slovakia" name="flag" type="radio" />
    <input id="Slovenia" name="flag" type="radio" />
    <input id="Spain" name="flag" type="radio" />
    <input id="Sweden" name="flag" type="radio" />
    <input className="dropdown-checkbox" name="dropdown" id="dropdown" type="checkbox" />
    <label className="dropdown-container" for="dropdown"></label>
    <div className="input-wrapper">
        <legend>
          <label for="phonenumber">
            Phonenumber*
          </label>
        </legend>
        <div className="textfield">
            <input pattern="\d+" maxlength="11" id="phonenumber" type="text" />
            <span className="invalid-msg">This is not a valid phone number</span>
        </div>
    </div>
    <div className="select-wrapper">
        <ul>
            <li className="Austria"><label for="Austria"><span>🇦🇹</span>Austria (+43)</label></li>
            <li className="Belgium"><label for="Belgium"><span>🇧🇪</span>Belgium (+32)</label></li>
            <li className="Bulgaria"><label for="Bulgaria"><span>🇧🇬</span>Bulgaria (+359)</label></li>
            <li className="Croatia"><label for="Croatia"><span>🇭🇷</span>Croatia (+385)</label></li>
            <li className="Cyprus"><label for="Cyprus"><span>🇨🇾</span>Cyprus (+357)</label></li>
            <li className="Czech"><label for="Czech"><span>🇨🇿</span>Czech Republic (+420)</label></li>
            <li className="Denmark"><label for="Denmark"><span>🇩🇰</span>Denmark (+45)</label></li>
            <li className="Estonia"><label for="Estonia"><span>🇪🇪</span>Estonia (+372)</label></li>
            <li className="Finland"><label for="Finland"><span>🇫🇮</span>Finland (+358)</label></li>
            <li className="France"><label for="France"><span>🇫🇷</span>France (+33)</label></li>
            <li className="Germany"><label for="Germany"><span>🇩🇪</span>Germany (+49)</label></li>
            <li className="Greece"><label for="Greece"><span>🇬🇷</span>Greece (+30)</label></li>
            <li className="Hungary"><label for="Hungary"><span>🇭🇺</span>Hungary (+36)</label></li>
            <li className="Iceland"><label for="Iceland"><span>🇮🇸</span>Iceland (+354)</label></li>
            <li className="Ireland"><label for="Ireland"><span>🇮🇪</span>Republic of Ireland (+353)</label></li>
            <li className="Italy"><label for="Italy"><span>🇮🇹</span>Italy (+39)</label></li>
            <li className="Latvia"><label for="Latvia"><span>🇱🇻</span>Latvia (+371)</label></li>
            <li className="Liechtenstein"><label for="Liechtenstein"><span>🇱🇮</span>Liechtenstein (+423)</label></li>
            <li className="Lithuania"><label for="Lithuania"><span>🇱🇹</span>Lithuania (+370)</label></li>
            <li className="Luxembourg"><label for="Luxembourg"><span>🇱🇺</span>Luxembourg (+352)</label></li>
            <li className="Malta"><label for="Malta"><span>🇲🇹</span>Malta (+356)</label></li>
            <li className="Netherlands"><label for="Netherlands"><span>🇳🇱</span>Netherlands (+31)</label></li>
            <li className="Norway"><label for="Norway"><span>🇳🇴</span>Norway (+47)</label></li>
            <li className="Poland"><label for="Poland"><span>🇵🇱</span>Poland (+48)</label></li>
            <li className="Portugal"><label for="Portugal"><span>🇵🇹</span>Portugal (+351)</label></li>
            <li className="Romania"><label for="Romania"><span>🇷🇴</span>Romania (+40)</label></li>
            <li className="Slovakia"><label for="Slovakia"><span>🇸🇰</span>Slovakia (+421)</label></li>
            <li className="Slovenia"><label for="Slovenia"><span>🇸🇮</span>Slovenia (+386)</label></li>
            <li className="Spain"><label for="Spain"><span>🇪🇸</span>Spain (+34)</label></li>
            <li className="Sweden"><label for="Sweden"><span>🇸🇪</span>Sweden (+46)</label></li>
        </ul>
    </div>
</div>
        </div>
        );

        export default Input_coach;
        
        
         */
}
