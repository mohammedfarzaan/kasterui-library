import styles from './Input_input3.module.css'


const Input_input3 = () => {
    return (
        <div>
            <>
                <div className={styles['input-container']}>
                    <input type="text" id="input" required="" />
                    <label htmlFor="input" className={styles.label}>
                        Enter Text
                    </label>
                    <div className={styles.underline} />
                </div>
            </>

        </div>
    )
}

export default Input_input3
