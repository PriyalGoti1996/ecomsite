import { useState } from "react";
import { useSelector } from "react-redux";
import Address from "./Address";
import "./PlaceOder.css"
function PlaceOrder() {
    const cartstate = useSelector(state => state.tocart)
    const finalTotal=cartstate.reduce((prev,cuurent)=>
    prev+(cuurent.colors[0].price*cuurent.quantity),0)
    console.log(finalTotal);
    const discount=401;
    const[formdata,setformdata]=useState(false)
    const [data,setdata]=useState({
        Name:"",Number:"",Pincode:"",Address:"",City:"",State:""
})
const handleChange=(e)=>{
const{name,value}=e.target
setdata({
    ...data,
    [name]:value
})
console.log(data);
}
const handleSubmit=()=>{
    setdata({
        ...data,
        Name:"",Number:"",Pincode:"",Address:"",City:"",State:""
    })
}
console.log("submit",data);
    return ( 
       <>
        {!formdata ?
        <div className="place-container">
        <div className="first-place-cont">
        <h6>CONTACT DETAILS</h6>
        <form onSubmit={handleSubmit}>
        <input className="place-input" type={"text"} placeholder="Name*" name="Name" required onChange={handleChange} value={data.Name}/><br/>
        <input  className="place-input" type={"text"} placeholder="Number*" name="Number" onChange={handleChange} value={data.Number} /><br/>
        <h6>ADDRESS</h6>
        <input  className="place-input" type={"text"} placeholder="Pincode*" name="Pincode" onChange={handleChange}value={data.Pincode} /><br/>
        <input  className="place-input" type={"text"} 
            placeholder="Address(House/Building No,Street,Area)*" name="Address" onChange={handleChange} value={data.Address} /><br/>
        <input  className="place-input" type={"text"} placeholder="City*" name="City" onChange={handleChange} value={data.City} /><br/>
        <input  className="place-input" type={"text"} placeholder="State*" name="State" onChange={handleChange} value={data.State} /><br/>
        <input className="plce-input" type={"checkbox"}/>Make this my address<br/>
        <button className="place-btn-order" onClick={()=>{setformdata(!formdata)}}>ADD TO ADDRESS</button>
        </form>
        </div>
    <div className="second-place-cont">
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
       
        </div>
        </div>
        :<>
            <Address data1={data}></Address>
        </>}
       </>
     );
}

export default PlaceOrder;
