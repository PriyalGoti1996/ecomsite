import { useDispatch, useSelector } from "react-redux";
import { decmenetcount, incrementcount } from "../Action/CountAction";
import { addtocartapi, whishitemremove } from "../Action/productaction";


function Whishlist() {
    const WhishCount=useSelector((state=>state.towishlist))
    console.log("add to whish list",WhishCount);
    const dispatch=useDispatch()
    const removeWhishList=(id)=>{
        dispatch(whishitemremove(id))
    }
    const addtocartitem=(value)=>{
      dispatch(addtocartapi(value))
    }
    console.log("hello");
    return (  
        <div>
           <h3>Whish List</h3>
            {
                WhishCount?.map((value, index) => {
          return (
            <div className="cart-main-div">
            <div className="first">
                <div><img className="first-imag" src={value.images} alt="Card image cap" height="300px" /></div>
              </div>
              <div className="first-one">
                <div><h6 className="card-title">Title:{value.title}</h6></div>
              </div>
            
              <div className="thred">
                    <span>{value.colors.map((item,i)=>{
                      return(
                        <span>{item.price}</span>
                      )
                    })}</span>
                  </div>
              
              <div className="second">
              <button className="whish-btn" onClick={()=>{removeWhishList(value)}}>Remove</button>
              <button className="addtocart-btn" onClick={()=>{addtocartitem(value)}}>AddToCart</button>
              </div>
            
            </div>
          )

        })
      }
        </div>
    );
}

export default Whishlist;