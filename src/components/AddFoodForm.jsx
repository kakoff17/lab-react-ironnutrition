import { useState } from 'react';
import { Input, Button } from 'antd';

function AddFoodForm({ addFood }) {
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingsInput, setServingsInput] = useState(0);

  const handleNameChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageInput(event.target.value);
  };

  const handleCaloriesChange = (event) => {
    setCaloriesInput(event.target.value);
  };

  const handleServingsChange = (event) => {
    setServingsInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      name: nameInput,
      image: imageInput,
      calories: caloriesInput,
      servings: servingsInput,
    };

   
    addFood(newFood);

    
    setNameInput('');
    setImageInput('');
    setCaloriesInput('');
    setServingsInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <Input value={nameInput} type="text" onChange={handleNameChange} />
      </div>
      <div>
        <label>Image:</label>
        <Input value={imageInput} type="text" onChange={handleImageChange} />
      </div>
      <div>
        <label>Calories:</label>
        <Input value={caloriesInput} type="text" onChange={handleCaloriesChange} />
      </div>
      <div>
        <label>Servings:</label>
        <Input value={servingsInput} type="text" onChange={handleServingsChange} />
      </div>
      <Button type="primary" htmlType="submit">
        Add Food
      </Button>
    </form>
  );
}

export default AddFoodForm;