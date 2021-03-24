import React from 'react'
import './style.css'

const SupportBlock = () => {
    return (
        <div className={"support"}>
            <div className={"link"}>
                <div>
                    <input className={"reference"} type="text"/>
                </div>
                <div>
                    <p className={"click"}>
                        Нажми на ссылку, чтобы скопировать
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SupportBlock;
