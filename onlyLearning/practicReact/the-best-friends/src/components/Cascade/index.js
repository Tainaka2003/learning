import React from 'react';
import './styles.css';
import CascadeElement1 from "./Icons/Listeners";
import CascadeElement2 from "./Icons/Location";
import CascadeElement3 from "./Icons/Headphones";

function Cascade() {
    return (
        <div className={"cascade"}>
            <div className="cascadeElement">
                <CascadeElement1 />
                <div className="cascadeDesc">
                    <div className="cascadeNumber">
                        1000+
                    </div>
                    <div className="cascadeCaption">
                        слушателей
                    </div>
                </div>
            </div>
            <div className="cascadeElement">
                <CascadeElement2 />
                <div className="cascadeDesc">
                    <div className="cascadeNumber">
                        2
                    </div>
                    <div className="cascadeCaption">
                        сервера
                    </div>
                </div>
            </div>
            <div className="cascadeElement">
                <CascadeElement3 />
                <div className="cascadeDesc">
                    <div className="cascadeNumber">
                        3
                    </div>
                    <div className="cascadeCaption">
                        музыканта
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cascade;