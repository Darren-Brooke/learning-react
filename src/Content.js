import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';


const Content = () => {
    //sets the default state of name, uses Const since it should never directly be changed
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "Item 1"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const handleCheck = (id) => {
        // check if item id is = to id, return this new item but it's flipped, if not return existing item.
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }


    function ListProducts(props) {
        return (<ul>
            {props.items.map(item => <li className="item" key={item.id}>
                <input type="checkbox" onChange={() => props.handleCheck(item.id)} checked={item.checked} />
                <label style={item.checked ? {
                    textDecoration: 'line-through'
                } : null} onDoubleClick={() => props.handleCheck(item.id)}>{item.item}</label>
                <FaTrashAlt onClick={() => props.handleDelete(item.id)} role="button" tabIndex="0" />
            </li>)}
        </ul>);
    }

    return (
        <main>
            {items.length ? (
                <ListProducts items={items} handleCheck={handleCheck} handleDelete={handleDelete}></ListProducts>
            ) : (
                <p style={{ marginTop: '2rem' }}>
                    Your List is Empty</p>
            )}
        </main>
    )
}

export default Content