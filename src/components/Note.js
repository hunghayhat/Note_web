import { useState } from 'react';
import { MdBuild, MdDeleteForever } from 'react-icons/md';
const Note = ({ id, text, date, handleDeleteNote, handleUpdateNote }) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [tText, setTText] = useState(text);
    const handleClickUpdate = () => {
        setIsUpdating(!isUpdating);
        // document.getElementById(id).focus();
    }

    const onSave = () => {
        handleUpdateNote(id, tText);
        setIsUpdating(!isUpdating);
    }
    return (
        <div
            className="note"
            id={id}
        >
            <textarea className='text-area'
                onChange={(e) => {
                    console.log(e.target.value);
                    setTText(e.target.value)
                }}
                // onFocus={isUpdating}
                disabled={!isUpdating}
            >{tText}</textarea>
            <div className="note-footer">
                <small>{date}</small>
                <div>


                <MdDeleteForever onClick={() => handleDeleteNote(id)}
                    className='delete-icon' size='1.3em' />
                {
                    isUpdating === false ?
                    
                    <MdBuild
                    onClick={() => handleClickUpdate()}
                    className='build-icon'
                    size='1.3em' />
                    :
                    <button className='save' onClick={() => onSave()}>Save</button>
                }

                </div>
               
            </div>
        </div>
    );
};

export default Note;
