
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [foodList, setFoodList] = useState([
    'Orange',
  'Grapes',
  'Strawberry',
  'Pineapple',
  'Watermelon',
  'Blueberry',
  'Raspberry',
  'Avocado',
  'Mango',
  'Kiwi',
  'Peach',
  'Cherry',
  'Apple',
  'Banana',
  'Carrot',
  'Broccoli',
  'Pear',
  'Lemon',
  'Grapefruit',
  'Cucumber',
  'Tomato',
  'Potato',
  'Spinach',
  'Papaya',
  'Blackberry',
  'Cantaloupe',
  'Fig',
  'Guava',
  'Honeydew',
  'Kale',
  'Lime',
  'Lychee',
  'Olive',
  'Pomegranate',
  'Radish',
  'Zucchini',
  ]);
  const [filteredFoods, setFilteredFoods] = useState([]);

  useEffect(function () {
    setFilteredFoods(filterFoods(searchTerm));
  }, [searchTerm]); 

  function handleSearchChange(event) {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    setFilteredFoods(filterFoods(newSearchTerm));
  }

  function filterFoods(term) {
    return foodList.filter(function (food) {
      return food.toLowerCase().includes(term.toLowerCase());
    });
  }

  return (
    <div className="container">
      <h1>FOOD MARKET</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for food..."
          className="search-input"
        />
      </div>
      <ul>
        {filteredFoods.map(function (food, index) {
          return <li key={index}>{food}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
