import { Route, Routes, Link } from 'react-router-dom'; 
import './menu-item.css';


export default function Categories(){
    const categories = [
        {
            name: "Deals",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/deals.png',
            categoryId: 1 
        },
        {
            name: "Grocery",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/uber_grocery.png',
            categoryId: 1 
        },
        {
            name: "Convenience",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/convenience.png',
            categoryId: 1 
        },
        {
            name: "Coffee and tea",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/coffeeandtea.png',
            categoryId: 1 
        },
        {
            name: "Retail",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/retail-v2.png',
            categoryId: 1 
        },        {
            name: "Alcohol",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png',
            categoryId: 1 
        },        {
            name: "Pharmacy",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/pharmacy-v2.png',
            categoryId: 1 
        },        {
            name: "Baby",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/retail-v2.png',
            categoryId: 1 
        },        {
            name: "Pet supplies",
            icon: 'https://cn-geo1.uber.com/static/mobile-content/eats/pet_supplies.png',
            categoryId: 1 
        },        
        {
            name: "Flowers",
            icon: 'https://cn-geo1.uber.com/static/mobile-content/eats/flowers_transparent_background.png',
            categoryId: 1 
        },
        {
            name: "Specialty Foods",
            icon: 'https://cn-geo1.uber.com/static/mobile-content/eats/specialy_transparent_background.png',
            categoryId: 1 
        },
        {
            name: "Electronics",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/electronics.png',
            categoryId: 1 
        },
        {
            name: "Best overall",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/top_eats.png',
            categoryId: 1 
        }
    ]
    return (<>
    <div>
        <nav>
            <ul className='nav-row'>
                {categories.map((category)=>             
                    <li>
                    <a className='' href=''>
                        <div>
                        <img src={category.icon}/>
                        </div>
                        <span>{category.name}</span>
                    </a>
                </li>
                )}
            </ul>
        </nav>
    </div>
</>
)
}
