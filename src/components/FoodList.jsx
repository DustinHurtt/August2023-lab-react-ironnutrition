import { Row, Divider } from "antd";

import { useState } from "react";

import foodsData from '../foods.json'

import FoodBox from './FoodBox'
import AddFoodForm from "./AddFoodForm";
import SearchForm from "./SearchForm";

const FoodList = () => {

    const [foods, setFoods] = useState(foodsData)
    const [searchTerm, setSearchTerm] = useState('')

    const deleteFood = (id) => {

        let newFoods = foods.filter((food) => food.id !== id)
        setFoods(newFoods)

    }

    const addFood = (food) => {

        let newFoods = [food, ...foods]

        setFoods(newFoods)

    }

    const setSearch = (str) => {
        setSearchTerm(str)
    }

    let filtered = searchTerm ? foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase())) : foods

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm addFood={addFood} />

      <SearchForm setSearch={setSearch}/>

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>

        {
          filtered.map((food) => {
            return <FoodBox key={food.id} food={food} deleteFood={deleteFood} />
          })
        }

      </Row>
    </div>
  )
}

export default FoodList