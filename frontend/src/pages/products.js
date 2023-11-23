import MenuItem from "../components/menu-item";
import '../components/menu-item.css';
import { useEffect, useState } from 'react';
import axios from 'axios';



export default function Menu(){
    const [menu, setMenu] = useState([])
    const [basket, setBasket] = useState([])
    useEffect (()=>{
        axios.get('http://localhost:3001/products')
            .then(res => setMenu(res.data))
    },[])
    function addToCard(id){
        const tempArr = basket.slice();
        const element = tempArr.find((obj)=> obj.id === id);
            if(element){
                element.count++
            } else{
                tempArr.push({
                    count:1,
                    id: id,
                });
            }
        console.log(tempArr)
        window.localStorage.setItem('basket', JSON.stringify(tempArr))
        setBasket(tempArr)
    }
    return <>
        <div className="menu-list">
            {menu.map((menu)=>
            <MenuItem data={menu} onAddToCard={addToCard}></MenuItem>
            )}
        </div>
    </>
}