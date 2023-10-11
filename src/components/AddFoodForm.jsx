import { Divider, Input, Button } from "antd";

import { useState } from "react";

function AddFoodForm({ addFood }) {

    const [newFood, setNewFood] = useState({
        name: '',
        image: '',
        calories: 0,
        servings: 0
    })

    const handleTextInput = (e) => {
        setNewFood((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleNumberInput = (e) => {
        setNewFood((prev) => ({...prev, [e.target.name]: Number(e.target.value)}))
    }

    const handleSubmit = (e) => {

        console.log("submitting...")

        e.preventDefault()

        addFood(newFood)

        setNewFood({
            name: '',
            image: '',
            calories: 0,
            servings: 0
        })
    }

  return (
    <form >
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name="name" value={newFood.name} type="text" onChange={handleTextInput} />

      <label>Image</label>
      <Input name="image" value={newFood.image} type="text" onChange={handleTextInput} />

      <label>Calories</label>
      <Input name="calories" type="number" value={newFood.calories} onChange={handleNumberInput} />

      <label>Servings</label>
      <Input name="servings" type="number" value={newFood.servings} onChange={handleNumberInput} />

      <Button onClick={handleSubmit} type="submit">Create</Button>
    </form>
  );
}

export default AddFoodForm;
