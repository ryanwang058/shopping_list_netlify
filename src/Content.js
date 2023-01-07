import React from 'react'
import ItemList from './ItemList'

const Content = ({items, handleCheck, handleDelete}) => {

    return (
        // fragment, cuz <main></main> has been added to App.js
        <>
            {items.length ? (
                <ItemList
                    items = {items}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}
                />
            ) : (
                <p style={{marginTop: '2rem'}}>Your list is empty.</p>
            )}
        </>
    )
}

export default Content