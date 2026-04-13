import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice";


const ItemList = ({items}) =>
{

    const dispatch = useDispatch();

    const handleAddItem = ()=>
    {
        dispatch(addItem(item));
    }

    return(
        <div>
            {items.map((item) => (
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2">
                <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span>Rs. {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                </div>  
                <div>
                <p className = "text-xs">
                    {item.card.info.description}
                </p>
                </div>
                <div className="absolute">
                    <button className="p-2 bg-white shadow-lg m-auto"
                    onClick={() => handleAddItem(item)}
                    ></button>
                </div>    

            </div>
            ))}
        </div>
        
    )
}

export default ItemList;