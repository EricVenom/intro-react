import './listItem.css';

function ListItem({ innerText }) {
    const handleChecked = (e) => {
        if (e.target.checked) {
            e.target.parentElement.remove()
        }
    }

    return (
        <div>
            <input
                type="checkbox"
                onChange={handleChecked}
            />
            <label>{innerText}</label>
        </div>
    )
};

export default ListItem;