import RestaurantItem from "../components/restaurant-item"
import Categories from "../components/categories"
import './restaurant.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Restaurant(){
    const [restaurants, setRestaurants] = useState([])
    useEffect (()=>{
        axios.get('http://localhost:3001/restaurants')
            .then(res => setRestaurants(res.data))
    },[])
    return <>
        <Categories></Categories>
        <div className="restaurant-list">
            {restaurants.map((restaurant)=>
            <RestaurantItem data={restaurant}></RestaurantItem>
            )}
        </div>
    </>
}