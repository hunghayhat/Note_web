import { useState } from 'react';
import { MdBuild, MdDeleteForever } from 'react-icons/md';
const Note = ({ id, text, date, handleDeleteNote, updateNote }) => {

    const [isUpdating, setIsUpdating] = useState(false)

    const [tmpText, setTmpText] = useState(text)
  
    const handleUpdateClick = () => {

        setIsUpdating(!isUpdating)
    }

    const handleSaveClick = () => {
        updateNote(id, tmpText)
        setIsUpdating(!isUpdating)
    }
    return (
        <div
            className="note"
            id={id}
        >
            <textarea
                cols={10}
                rows={8}
                value={tmpText}
                disabled={!isUpdating}
                className='text-area'
                onChange={(event)=> {
                    setTmpText(event.target.value)
                }}
            >{tmpText}
            </textarea>
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
