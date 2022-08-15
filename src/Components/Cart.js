import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { decmenetcount, incrementcount } from "../Action/CountAction";
import { decmenetcount, deleteitem, incrementcount,} from "../Action/productaction";
import Empty from "./Empty";
function Cart() {
  const discount=401;
  const cartstate = useSelector(state => state.tocart)
  const finalTotal=cartstate.reduce((prev,cuurent)=>
  prev+(cuurent.colors[0].price*cuurent.quantity),0)
  console.log(finalTotal);

  const navigat=useNavigate();
  const dispatch = useDispatch();
  const DeletetoAdditem = (id) => {
    dispatch(deleteitem(id))
    console.log("Delete item Sucssefully");
  }
  const mycount=useSelector(state=>state.tocart)
  // console.log("count in total",mycount);
 
const cartcounter=mycount.length;
console.log("cart counter",cartcounter);
  return (
 <>
 {cartcounter>0?
<div className="main-cart">
 <div className="main-container">
      <div className="contaiber-main">
      {
        cartstate?.map((value, index) => {
          return (
            <div className="cart-main-div">
              <div className="first">
                <div><img className="first-imag" src={value.images} alt="Card image cap" height="300px" /></div>
              </div>
              <div className="first-one">
                <div><h6 className="card-title">Title:{value.title}</h6></div>
              </div>
             <div className="thred">
              <button className="btn-cart" onClick={() => dispatch(incrementcount(value))}>+</button>
              <span>Quntity{value.quantity}</span>
              <button className="btn-cart" onClick={() => dispatch(decmenetcount(value))}>-</button>
              </div>
              <div className="thred">
                    <span>{value.colors.map((item,i)=>{
                      return(
                        <span>price:{item.price}</span>
                      )
                    })}</span>
                  </div>
                  <div className="four">
                    <span>{value.colors.map((item,i)=>{
                      return(
                        <span>TotalPrice:{(item.price)*(value.quantity)}</span>
                      )
                    })}</span>
                  </div>
              <div className="second">
              <button className="btn-cart" onClick={()=>{DeletetoAdditem(value)}}>Remove</button>
              </div>
            </div>
          )

        })
      }
      <div className="second-cart-cont">
        <h6>PRICE DETALE</h6>
        <div className="price-detali">
            <div className="amount-type">Total MRP</div>
            <div className="amount">RS.{finalTotal}</div>
        </div>
        <div className="price-detali">
            <div className="amount-type">Discount ON MRP</div>
            <div className="amount">RS.-401</div>
        </div>
        <div className="price-detali">
            <div className="amount-type">Coupon Discount</div>
            <div className="amount" id="amount-id">Apply</div>
        </div>
        <div className="price-detali">
            <div className="amount-type">Total Amount</div>
            <div className="amount">RS.{finalTotal-discount}</div>
        </div>
       <button className="place-btn-order" onClick={()=>{navigat("/placeoder")}}>PLCE ORDER</button>
        </div>
    </div>
</div>

</div>:
<Empty></Empty>}
</>

  );
}

export default Cart;


