import React from 'react'
import './style.css'

const Card = (props) => {
    return (
        <div>
            <div
                className="card"
            >
                <div
                    className="title"
                >
                    <span
                        className="caption"
                    >
                        Card {props.caption}
                    </span>
                    <button
                        className="nav"
                    >
                        <img
                            src="https://i.ibb.co/Z2GR6Mn/move.png"
                            alt="move"
                            border="0"
                        />
                    </button>
                    <div
                        className="dropdown"
                    >
                        <button
                            onClick={myFunction}
                            className="dropbtn"
                        >
                            <img
                                src="https://i.ibb.co/1RRTJ8J/menu.png"
                                alt="menu"
                                border="0"
                            />
                        </button>
                        <div id="myDropdown" className="dropdown-content">
                            <p className="select">
                                <img className="image" src="https://i.ibb.co/PrD63zZ/edit.png" alt="edit" border="0" />
                                <span className="action">Редактировать</span>
                            </p>
                            <p className="select">
                                <img className="image" src="https://i.ibb.co/HGNYF2j/close.png" alt="close" border="0" />
                                <span className="action">Удалить</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="register"
                >
                    {props.class}
                </div>
                <div
                    className="register"
                >
                    {props.register3}
                </div>
                <div
                    className="register"
                >
                    {props.register4}
                </div>
                <div
                    className="register"
                >
                    {props.register5}
                </div>
                <div
                    className="register"
                >
                    {props.register6}
                </div>
            </div>
        </div>
    )
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

export default Card;
