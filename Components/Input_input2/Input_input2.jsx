import styles from './Input_input2.module.css'


const Input_input2 = () => {
  return (
    <div>
      <>
        <div className={styles.inputbox}>
          <input required="required" type="text" />
          <span>Username</span>
          <i />
        </div>
      </>

    </div>
  )
}

export default Input_input2

