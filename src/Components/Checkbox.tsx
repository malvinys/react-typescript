import React from "react";

import ICheckbox from '../Interfaces/ICheckbox';

type onCheckboxClick = (selectedTodo: number) => void;

interface Props {
    item: ICheckbox,
    onCheckboxClick: onCheckboxClick
}

const Checkbox: React.FC<Props> = ({item, onCheckboxClick}) => {
    return (
        <>
            <input type="checkbox" checked={item.isChecked} onChange={() => onCheckboxClick(item.id)}/>{item.text}
        </>
    );
}

export default Checkbox;