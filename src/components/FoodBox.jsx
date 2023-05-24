import { Button } from 'antd';
function FoodBox({food, onDelete}) {

  const handleDelete = () => {
    onDelete(food);
  };

  return (
    <div className="FoodBox">
      <div>
        <img src={food.image} alt="imagen" width={250} />
        <h2>{food.name}</h2>
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <Button type="primary" danger onClick={handleDelete}>Delete</Button>
      </div>
    </div>
  );
}

export default FoodBox;
