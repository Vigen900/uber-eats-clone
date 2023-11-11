import RestaurantItem from "../components/restaurant-item"
import Categories from "../components/categories"
 import './restaurant.css';

export default function Restaurant(){
    const restaurants = [
        {
            name:'McDonald',
            icon:'https://www.shutterstock.com/image-vector/logo-famous-identity-city-style-260nw-2275339803.jpg',
            deliveryTime:'10-20 min',
            id:""
        },
        {
            name:'KFC',
            icon:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hZDYxMTZkNS1jZTkzLTQxNzQtOWQ3NC02ZjM2MGI1YWYxZTQuanBlZw==',
            deliveryTime:'5-10 min',
            id:''
        },
        {
            name:'Pizza',
            icon:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMWRhMjEzYWM3MWYwM2M0NTQwN2ZhZWNiYTRmOTg1ZmEvNzkxNWM0YTc4YTlmOTRlZDU2MzE2YzdjNGRjMGVjODkuanBlZw==',
            deliveryTime:'30-45 min',
            id:''
        }
    ]
    return <>
        <Categories></Categories>
        <div className="restaurant-list">
            {restaurants.map((restaurant)=>
            <RestaurantItem data={restaurant}></RestaurantItem>
            )}
        </div>
    </>
}