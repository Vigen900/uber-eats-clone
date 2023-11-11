import './menu-item.css';
import { Route, Routes, Link } from 'react-router-dom';

export default function MenuItem({data}){
    return (<>
    <Link to="/single-product">
        <div className = 'burger-item'>
                <img src={data.icon}/>
            <div className = 'burger-info'>
                <span className='s2'>{data.name}</span><br/>
                <span className='s1'>{data.deliveryTime}</span>
            </div>
        </div>
    </Link>
    </>)
}