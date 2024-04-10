import React from "react";

const Header = ({ handleToggleDarkMode }) => { //darkmode toggle
    return (
        <div className="header">
            <h1>To do list</h1>
            <button
                onClick={() => handleToggleDarkMode(
                    (previousDarkMode) => !previousDarkMode
                )
                } className="save"
            >
                Toggle Mode
            </button>
        </div>
    );
};
// test
export default Header;