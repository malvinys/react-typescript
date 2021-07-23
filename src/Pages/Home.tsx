import React, {useState} from "react";

interface ICheckbox {
    id: number,
    text: string,
    isChecked: boolean
};

const initialCheckbox: ICheckbox[] = [
    {
        id: 1,
        text: 'Stand Up',
        isChecked: true
    },
    {
        id: 2,
        text: 'Meeting',
        isChecked: false
    },
]

const initialNewTodo: string = '';

const Home = () => {
    const [checkbox, setCheckbox] = useState(initialCheckbox);
    const [newTodo, setNewTodo] = useState(initialNewTodo)

    const handleCheckboxClick = (id: number) => {
        const updateCheckbox: ICheckbox[]= checkbox.map((item => {
            if(item.id == id) {
                return {
                    ...item,
                    isChecked: !item.isChecked
                };
            }

            return item;
        }))

        setCheckbox(updateCheckbox);
    }

    const handleNewTodoChange = (text: string) => {
        setNewTodo(text);
    }

    const handleButtonAddClick = (): void => {
        const dataNewTodo = {
            id: checkbox.length + 1,
            text: newTodo,
            isChecked: false
        }

        setCheckbox([...checkbox, dataNewTodo]);
    }

    return (
        <div className="container">
            <h1>Todo List App</h1>
            <div className="container-add-checkbox">
                <input type="text" placeholder="Input todo" onChange={(e) => handleNewTodoChange(e.target.value)} value={newTodo}/>
                <button onClick={() => handleButtonAddClick()}>Add</button>
            </div>
            <div className="container-checkbox">
                {checkbox.map((item, key) => {
                    return (
                        <div key={key}>
                            <input type="checkbox" checked={item.isChecked} onChange={() => handleCheckboxClick(item.id)}/>{item.text}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;