import React from 'react'

const Input_input1 = () => {
    return (
        <div>
            <>
  /* From Uiverse.io by 0xnihilism */
                <div className="input__container">
                    <div className="shadow__input" />
                    <button className="input__button__shadow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#000000"
                            width="20px"
                            height="20px"
                        >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                    </button>
                    <input
                        type="text"
                        name="username"
                        className="input__search"
                        placeholder="Enter username"
                    />
                </div>
            </>

        </div>
    )
}

export default Input_input1
