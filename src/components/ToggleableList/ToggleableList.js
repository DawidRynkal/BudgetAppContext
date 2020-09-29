import React, { useState, useEffect } from 'react';

const Item = React.memo(({ item, onClickHandler, isActive }) =>
    (
        <div>
            <item.Trigger onClick={onClickHandler} />
            {isActive && item.children}
        </div>))


function ToggleableList({ items, clickRef }) {
    const [selectedItem, setSelectedItem] = useState();

    useEffect(() => {
        clickRef.current = setSelectedItem;
    }, [clickRef, setSelectedItem])


    return (
        <>
            {items.map(item => {
                return (
                    <Item
                        key={item.id}
                        item={item}
                        onClickHandler={setSelectedItem}
                        isActive={selectedItem === item.id}
                    />
                )
            }
            )}
        </>
    )
}

export default React.memo(ToggleableList);