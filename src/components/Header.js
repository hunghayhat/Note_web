import React from "react";

const Header = ({ handleToggleDarkMode }) => { //darkmode toggle
    return (
        <div className="header">
            <h1>NoteFlow</h1>
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

export default Header;