import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const [searchInput, setSearchInput] = useState("");

  const handleAddFood = (newFood) => {
    setFoodList([...foodList, newFood]);

  };

  const handleDeleteFood = (deletedFood) => {
    const updatedFoodList = foodList.filter((food) => food !== deletedFood);
    setFoodList(updatedFoodList);
  };
  

  const filteredFoodList = foodList.filter((food) => {
    return food.name.includes(searchInput);
  });


  return (
    <div className="App">
      <Search setSearchInput={setSearchInput} searchInput={searchInput}/>
      <h3>Food List</h3>
      <div>
        {filteredFoodList.map((eachFood, index) => (
          <FoodBox key={index} food={eachFood} onDelete={handleDeleteFood}/>
        ))}
      </div>
      <h3>Add new food</h3>
      <AddFoodForm addFood={handleAddFood} />
    </div>
  );
}

export default App;
