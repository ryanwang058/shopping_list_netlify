import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    // enables autofocus back to the input after clicking the add button
    const inputRef = useRef();

    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type='submit'
                // for accessibility, non-text should add `aira-label`
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem