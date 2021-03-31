import React from 'react'
import './style.css'

const Sorting = (props) => {
    return (
        <div>
            <form
                action=""
                className="sorting"
            >
                <select
                    name=""
                    id=""
                    className="dropdown"
                >
                    <option
                        value="sort"
                    >
                        Sorting
                    </option>
                    <option
                        value="ascending"
                    >
                        Sort by ID: ascending
                    </option>
                    <option
                        value="descending"
                    >
                        Sort by ID: descending
                    </option>
                </select>
                <p
                    className="checkbox"
                >
                    <input
                        type="checkbox"
                        value="dragdrop"
                    />
                    Enable drag and drop
                </p>
                <p
                    className="button-wrap"
                >
                    <input
                        type="button"
                        value="Add"
                        className="button"
                    />
                </p>
            </form>
        </div>
    );
}

export default Sorting;
