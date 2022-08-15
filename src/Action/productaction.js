import { product,addtocart, removtocart, wlist, } from "../Type/typeProduct";
export const productapi=(data)=>{
    return{
        type:product.APIDATA,
        payload:data
    }
}
export const addtocartapi=(data)=>{
    return{
        type:addtocart.ADDTOCART,
        payload:data
    }
}
export const incrementcount=(data)=>{
    return{
        type:addtocart.INCREMENT,
        payload:data
    }
    }
    export const decmenetcount=(data)=>{
        return{
            type:addtocart.DECREMENT,
            payload:data
            
        }
    }
export const deleteitem=(id)=>{
    return{
        type:removtocart.DELETEITEM,
        payload:id
        
    }
}
export const whishitem=(id)=>{
    return{
        type:wlist.ADDWHISHLIST,
        payload:id
        
    }
}
export const whishitemremove=(id)=>{
    return{
        type:wlist.REMOVEWHISHLIST,
        payload:id
        
    }
}