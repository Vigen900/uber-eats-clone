
import { useState, useEffect} from 'react'
import BasketItem from '../components/basket-item'
import './basket.css'


const productsList = [
    {
        id:1,
        img:'https://tb-static.uber.com/prod/image-proc/processed_images/db3c6966ae5f42e857598331c222d425/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        title:'Medium French Fries', 
        price:4.89,
        cal:'320 Cal.',
        count:1,
    },
    {
        id:2,
        img:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYTlkMmExNWRkMDJiYWQxYTI1NzY1OWE3Y2IzNGE1YzIvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==',
        title:'10 pc. Chicken McNuggets® Meal', 
        price:11.59,
        cal:'740 - 980 Cal.', 
        count:1,
    },
    {
        id:3,
        img:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNzFlYWQ5ZGI4OTZlYzExMmZkMTZlMGRmYTI0N2VmZTkvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==',
        title:'10 pc. Chicken McNuggets®', 
        price:6.19,
        cal:'410 Cal.', 
        count:1,
    },
    {
        id:4,
        img:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZmFkYzI4MTgxZjE1MDVhODAzYmIwZjFkMjM4NGU1ZGIvYTE5YmIwOTY5MjMxMGRmZDQxZTQ5YTk2YzQyNGIzYTYuanBlZw==',
        title:'Double Cheeseburger', 
        price:4.59,
        cal:'450 Cal.', 
        count:1,
    },
    {
        id:5,
        img:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYjQ4MGM5NjcwMzVmOGE5ZWVkOWIzZGVjMTgxZTQxOGEvYTE5YmIwOTY5MjMxMGRmZDQxZTQ5YTk2YzQyNGIzYTYuanBlZw==',
        title:'McChicken®', 
        price:4.59,
        cal:'400 Cal.', 
        count:1,
    },
]
export default function Basket () {
  
    const [grandTotal, setGrandTotal] = useState(0)
    const [basketItems, setBasketItems] = useState([])
    function countChange (id, count) {
        const pr = productsList.find((k)=> k.id===id);
        pr.count = count;
        const grandTotalAmount = productsList.reduce((a,b) =>{
            return(a + b.count * b.price)
        },0)
        setGrandTotal(grandTotalAmount)   
    };
    
    useEffect (()=>{
        const basket = window.localStorage.getItem('basket')
        setBasketItems(JSON.parse(basket))
        console.log(basketItems)
    },[])
    return (<>
        {basketItems.map((element)=>{
            return <span>count:{element.count} id:{element.id}</span>
        }
        )}
       {/* <form>
            <table className="basket-table" cellPadding={46}>
                <tbody>
                    {productsList.map((cart, index)=>
                     <BasketItem onCountChange={countChange} key={index} cart={cart}></BasketItem>
                    )}
                </tbody>
            </table>
            <span>AMOUNT {(grandTotal).toFixed(2)}</span>
       </form> */}
    </>
)}