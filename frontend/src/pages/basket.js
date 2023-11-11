import './basket.css';

export default function Basket(){
    const basket = [
        {
            name:'McDouble® Comes With',
            icon:'https://tb-static.uber.com/prod/image-proc/processed_images/6382f13784f101e0f7c56554f2ac6cbc/a19bb09692310dfd41e49a96c424b3a6.jpeg',
            deliveryTime:'$ 2.30  •  150 cal.',
            id:"",
            count:1,
            price:900,
        },
        {
            name:'McDouble® nugeets',
            icon:'https://tb-static.uber.com/prod/image-proc/processed_images/9662ab58e4baf79bd8e5185d42d43f00/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
            deliveryTime:'$ 3.30  •  150 cal.',
            id:'',
            count:2,
            price:150,
        },
        {
            name:'Hash Browns',
            icon:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvOTQ5MzY1OGRjNTliM2RmODZlZDk0MmM3ODM4ZmNiNjUvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==',
            deliveryTime:'$ 3.19  •  150 cal.',
            id:'',
            count:3,
            price:390,
        },
        {
            name:'Sausage McMuffin®',
            icon:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMmExYzIyM2Q0NzRkYjg2OGY5MzJiZDJhMDRlZjczYWUvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==',
            deliveryTime:'$ 1.19  •  270 cal',
            id:'',
            count:4,
            price:400,
        },
        {
            name:'Hotcakes and Sausage',
            icon:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvOTQ5MzY1OGRjNTliM2RmODZlZDk0MmM3ODM4ZmNiNjUvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==',
            deliveryTime:'$ 6.19  •  780 cal.',
            id:'',
            count:5,
            price:200,
        },
        {
            name:'Sausage Burrito',
            icon:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYjk3YmNkMWZkZWY1OWUzYWUyNTEyNWFmMGM5M2NlYjMvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==',
            deliveryTime:'$ 3.40 •  380 cal.',
            id:'',
            count:6,
            price:100,
        }
    ]
    return (<>
        <form>
            <table className="basket-table" cellPadding={40}>
                {basket.map((data)=>
                    <tr>
                        <td>
                            <a href="">
                                <img src={data.icon}/>
                            </a>
                        </td>
                        <td>
                            <a href="">
                                <span>{data.name}</span>
                            </a>
                        </td>
                        <td>
                            <span>{data.price}</span>
                        </td>
                        <td>
                            <button>-</button>
                            <span>{data.count}</span>
                            <button>+</button>
                        </td>
                        <td>
                            <span>{data.count * data.price}</span>
                        </td>
                    </tr>
            )}
            </table>
        </form>
    </>);
}