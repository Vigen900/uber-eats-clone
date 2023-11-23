
import './menu-item.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Categories(){
    const [categories, setCategories] = useState([])
    useEffect (()=>{
        axios.get('http://localhost:3001/categories')
            .then(res => setCategories(res.data))
    },[])
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
