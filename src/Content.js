
import { ItemList } from "./ItemList"

const Content = ({ items, handleCheck, handleDelete }) => {
    //sets the default state of array

    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}>
                </ItemList>
            ) : (
                <p style={{ marginTop: '2rem' }}> Your List is Empty</p>
            )}
        </main>
    )
}

export default Content