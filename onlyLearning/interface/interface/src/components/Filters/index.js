import React from 'react'
import './style.css'

const Filters = (props) => {
    return (
        <div>
            <form
                action=""
                className="filters"
            >
                <p
                    className="title"
                >
                    Filters
                </p>
                <label
                    htmlFor=""
                    className="label"
                >
                    ID
                </label>
                <input
                    type="text"
                    placeholder="Input value"
                    className="input"
                />
                <label
                    htmlFor=""
                    className="label"
                >
                    Invoice number
                </label>
                <input
                    type="text"
                    placeholder="Input value"
                    className="input"
                />
                <label
                    htmlFor=""
                    className="label"
                >
                    Time of arrival for unloading
                </label>
                <div
                    className="date"
                >
                    <span
                        className="caption"
                    >
                        from
                    </span>
                    <input
                        type="date"
                        className="data-input"
                    />
                    <span
                        className="caption"
                    >
                        by
                    </span>
                    <input
                        type="date"
                        className="data-input"
                    />
                </div>
                <label
                    htmlFor=""
                    className="label"
                >
                    ID
                </label>
                <select
                    name=""
                    id=""
                    className="order"
                >
                    <option
                        value="RUED"
                    >
                        RUED
                    </option>
                    <option
                        value="RUEX"
                    >
                        RUEX
                    </option>
                    <option
                        value="RUSG"
                    >
                        RUSG
                    </option>
                </select>
            </form>
        </div>
    );
}

export default Filters;
