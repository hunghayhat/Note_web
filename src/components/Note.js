import { useState } from 'react';
import { MdBuild, MdDeleteForever } from 'react-icons/md';
const Note = ({ id, text, date, handleDeleteNote }) => {

    const [isUpdating, setIsUpdating] = useState(false)

    const handleUpdateClick = () => {
        setIsUpdating(!isUpdating)
    }

    const handleSaveClick = () => {
        setIsUpdating(!isUpdating)
    }
    return (
        <div
            className="note"
            id={id}
        >
            <textarea column = {3} rows={8} disabled= {!isUpdating} className='text-area'>{text}</textarea>
            <div className="note-footer">
                <small>{date}</small>
                {
                    isUpdating === false ?
                    <div>
                        <MdDeleteForever onClick={() => handleDeleteNote(id)}
                            className='delete-icon' size='1.3em' />
                        <MdBuild onClick={() => handleUpdateClick()}
                            className='update-icon' size='1.3em' />
                    </div>
                    :
                    <button onClick={() => handleSaveClick()} className='save'>Save</button>

                }
            </div>
        </div>
    );
};

export default Note;
