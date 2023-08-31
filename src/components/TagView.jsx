import React, { useState } from 'react'

export const TagView = ({ tag, onTagNameChange }) => {
    console.log(tag.name);
    const [showData, setShowData] = useState(false);
    const [tagName, setTagName] = useState("");

    const handleShowData = () => {
        setShowData(!showData);
    }

    const handleTagNameChange = (event) => {
        setTagName(event.target.value);
    }

    const setNewTagName = (event) => {
        if(event.key==="Enter"){
            onTagNameChange(tag,event.target.value);
            event.target.blur()
        }
    }

    return (
        <div className='tag'>
            <div className='tagHeader'>
                <button onClick={handleShowData}>{showData ? "v" : ">"}</button>
                <input type='text' defaultValue={tag.name} onChange={handleTagNameChange} onKeyDown={setNewTagName} color='black' />
            </div>
        </div>
    )
}
