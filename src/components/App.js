
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [val, setVal] = useState();
  const handleChange = (e) => {
    setVal(e.target.value);
  }

  const obj = [{
    fruit: 'Apple',
    price: '20'
  }, {
    fruit: 'Banana',
    price: '10'
  },
  {
    fruit: 'Neutella',
    price: '30'
  },
  {
    fruit: 'Razor',
    price: '5'
  },
  {
    fruit: 'Cornflakes',
    price: '15'
  },
  {
    fruit: 'Soundbar',
    price: '50'
  },
  {
    fruit: 'Iphone',
    price: '80'
  },
  ]

  return (
    <div>
      {/* Do not remove the main div */}
      <h3>Enter your budget to check available items</h3>
      <input onChange={handleChange} type="number" />
      <h3>Items you can buy are in Green color</h3>
      <ul>
        {
          obj.map((item) => (
            <li>{item.fruit}<span style={{color:item.price>val? 'red':'green'}}>{item.price}</span></li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
