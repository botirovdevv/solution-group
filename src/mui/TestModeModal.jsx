import React, { useState } from 'react'

const TestModeModal = () => {
    const [isShow, setIsShow] = useState(true)
    return (
        <div className={isShow ? 'modal show' : "modal"}>
            <div className="modal-content">
                <h1 className='modal-title'>Web saytimiz test rejimda ishlamoqda</h1>
                <button className='modal-btn' onClick={() => setIsShow(false)}>Ok</button>
            </div>
        </div>
    )
}

export default TestModeModal