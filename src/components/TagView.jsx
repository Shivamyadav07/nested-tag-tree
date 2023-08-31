import React, { useState } from 'react'

export const TagView = ({ tag, onTagNameChange, onAddChild, onDataNameChange }) => {
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
        if (event.key === "Enter") {
            onTagNameChange(tag, tagName);
            event.target.blur()
        }
    }

    const handleAddChild = () => {
        onAddChild(tag);
    }

    const handleDataNameChange = (event) => {
        onDataNameChange(tag, event.target.value);
    }

    return (
        <div className='tag'>
            <div className='tagHeader'>
                <div className='showData'>
                    <button onClick={handleShowData}>{showData ? "v" : ">"}</button>
                </div>
                <input type='text' className='tagInput' defaultValue={tag.name} onChange={handleTagNameChange} onKeyDown={setNewTagName} color='black' />
                <button className='addChild' onClick={handleAddChild}>Add Child</button>
            </div>
            {showData && (
                <div className='tagContent'>
                    {tag.data !== undefined && (
                        <div className='tagContentData'>
                            Data:
                            <input type='text' defaultValue={tag.data} onChange={handleDataNameChange} />
                        </div>
                    )}
                    {tag.children && (
                        tag.children.map((element, index) => {
                            return (
                                <TagView
                                    key={index}
                                    tag={element}
                                    onAddChild={onAddChild}
                                    onTagNameChange={onTagNameChange}
                                    onDataNameChange={onDataNameChange}
                                />
                            )
                        })
                    )}
                </div>
            )}
        </div>
    )
}
