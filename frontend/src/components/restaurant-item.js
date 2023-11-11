import { Route, Routes, Link } from 'react-router-dom';
import './menu-item';
import '../pages/restaurant.css';
import Categories from './categories';


export default function RestaurantItem({data}){
    return (<>
    
        <Link to="/products">
            <div className='parent-rest-item'>
                    <div className = 'burger-set3'>
                        <img src={data.icon}/>
                    </div>
                    <div className='burger-title'>
                        <span>{data.name}</span>
                    </div>
                    <div>
                        <span className='span-c1'>{data.deliveryTime}</span>
                    </div>
            </div>
        </Link>
        </>
        )
}
