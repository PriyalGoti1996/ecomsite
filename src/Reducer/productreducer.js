
import { product,addtocart, removtocart,wlist} from "../Type/typeProduct";
const initialstate={products:[]};
// const cart=[];
const whish=[]
export const productapidata=(state=initialstate,{type,payload})=>{
switch(type){
    case product.APIDATA:
        return state=payload
        default :
        return state

    }
}
export const addtocartdata=(state=[],{type,payload})=>{
    switch(type){
        case addtocart.ADDTOCART:
            let tempcart=state.filter((p)=>p.id===payload.id)
            console.log(tempcart);
            if(tempcart<1)
            {
                return [...state,payload]
            }
            else
            {
                return state
            }
            break;
            case addtocart.INCREMENT:
                let temincre=state.map((item)=>{
                    if(item.id===payload.id){
                        console.log("if");
                        console.log({...item,quantity:item.quantity+1})
                        return{...item,quantity:item.quantity+1}
                    }
                
             return (item)
            })
            return temincre
            break;
            case addtocart.DECREMENT:
                let temdecr=state.map((item)=>{
                    if(item.id===payload.id){
                        return{...item,quantity:item.quantity-1}    
                    }
                    
                
                return (item)
            })
            return temdecr
               
        case removtocart.DELETEITEM:
            return state.filter((p)=>p.id !== payload.id)  
        default :
            return state
        }
}
export const addtoWhishlist=(state=whish,{type,payload})=>{
    switch(type){
        case wlist.ADDWHISHLIST:
            let whishcart=state.filter((p)=>p.id===payload.id)
            console.log(whishcart);
            if(whishcart<1)
            {
                return [...state,payload]
            }
            else
            {
                return state
            }
        case wlist.REMOVEWHISHLIST:
            return state.filter((p)=>p.id !== payload.id)  
        default :
            return state
        }
}
   