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
            <textarea
                onChange={(e) => {
                    console.log(e.target.value);
                    setTText(e.target.value)}}
                // onFocus={isUpdating}
                disabled={!isUpdating}
            >{tText}</textarea>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever onClick={() => handleDeleteNote(id)}
                    className='delete-icon' size='1.3em' />
                
                
                
                {
                    isUpdating == false ?

                        <MdBuild
                            onClick={() => handleClickUpdate()}
                            className='build-icon'
                            size='1.3em' />
                        :
                        <div onClick={() => onSave()}>Save</div>
                }

            </div>
        </div>
    );
};

export default Note;
