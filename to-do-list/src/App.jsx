import './App.css';
import ListItem from './components/listItem';
import { useState } from 'react';

function App() {

  const [item, setItem] = useState([]);

  const handleInput = (e) => {
    if (e.key == "Enter" && e.target.value) {
      const newItem = e.target.value;
      setItem([...item, newItem]);
      e.target.value = "";
    }
  }

  return (
    <div className="container">
      <div className="left_side">
        <h1>TO DO LIST</h1>
        <input type="text" className="input" onKeyDown={handleInput} />
      </div>
      <div className="right_side">
        <fieldset>
          {
            item.map((i, index) => (
              <ListItem
                kep={index}
                text={i}
                innerText={i} />
            ))
          }
        </fieldset>
      </div>
    </div>
  )
}

export default App
