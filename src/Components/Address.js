import $ from "jquery";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./Address.css"
function Address(props) {
    console.log(props.data1);
    let code;
    const ref=useRef()
    const [random,setrandom]=useState(Math.floor(10000+Math.random()*90000))
    const [del, setdel] = useState(true)
    const[card,setcard]=useState(false)
    const[upi,setupi]=useState(false)
    const [net,setnet]=useState(false)
    const[check,setcheck]=useState(false)

    const handleDelivery = () => {
        setdel(true)
        setcard(false)
        setupi(false)
        setnet(false)
    }
    const handleCards=()=>{
        setcard(true)
        setdel(false)
        setupi(false)
        setnet(false)
    }
    const handleupi=()=>{
        setupi(true)
        setdel(false)
        setcard(false)
        setnet(false)
    }
    const handlenet=()=>{
        setnet(true)
        setupi(false)
        setdel(false)
        setcard(false)
    }
    const changeimageaaHandle=()=>{
        setrandom(Math.floor(10000 + Math.random() * 90000))
    }
    const codeHandler=(e)=>{
        code=e.target.value;
        if(code.length>4)
        {if(code !=random)
            {setcheck(true)}
        else{setcheck(false)}}
    }
    const placOrderHandler=(e)=>{
        e.preventDefault();
        console.log("hello");
        ref.current.value=""

    }
    $(document).ready(function () {
        $('.add-div-onclick')
                .click(function (e) {
            $('.add-div-onclick')
                .removeClass('active');
            $(this).addClass('active');
        });
    });
    console.log(ref);
    console.log(del);
    const discount = 401;
    const cartstate = useSelector(state => state.tocart)
    const finalTotal = cartstate.reduce((prev, cuurent) =>
        prev + (cuurent.colors[0].price * cuurent.quantity), 0)
    console.log(finalTotal);
    return (
        <div className="main-address">
            <div className="add-main-container">
                <div className="first-add">
                    <h6>DEFAULT ADDRESS</h6><br />
                        <p>Name:{props.data1.Name}</p>
                        <p>MobilNumber:{props.data1.Number}</p>
                        <p>Address:{props.data1.Address}</p>
                    <li>Pay On Delivery Available</li>

                    <button className="btn-add-f">REMOVE</button>
                    <button className="btn-add-s">ADDTOCART</button>
                </div>
                <div className="second-add">
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
                        <div className="amount">RS.{finalTotal - discount}</div>
                    </div>
                    <button className="place-btn-order" >PLCE ORDER</button>
                </div>
            </div>
            <h5>CHOOSE PAYMENT MODE</h5>
            <div className="add-second-container">
                <div className="btn-all">
                    <div className="add-div-onclick" onClick={handleDelivery}>Cash On Delivery</div>
                    <div className="add-div-onclick" onClick={handleCards}>Credit/Debite Card</div>
                    <div className="add-div-onclick" onClick={handleupi}>Phone Pe/Google pay</div>
                    <div className="add-div-onclick" onClick={handlenet}>Net Banking</div>
                </div>
                <div className="add-se-f">
                    {(del) ? 
                    <div >
                        <div><h6>PAY ON DELIVERY(Cash/Card/UPI)</h6></div>
                        <div className="first-line">
                            <div className="first-left">{random}</div>
                            <div className="first-right" onClick={changeimageaaHandle}>Change code</div>
                        </div><br/>
                        {check && <span className="Invalid-code">Invalid code</span>}
                            <form onSubmit={placOrderHandler}>
                                <input ref={ref} type={"text"} placeholder={"Enter Code Show Above"} onChange={codeHandler} className="input-first-row"/><br/><br/>
                                <button className="btn-first-row">PLACE ORDER</button>
                            </form>
                    </div>
                    :<h1></h1>}
                    {
                        (card)?
                        <div className="card-container"> 
                        <h6>CREDIT/DEBIT CARD</h6>

                        <div ><input className="one-second" type={"text"} placeholder="Card Number"/></div>
                        <div ><input className="one-second" type={"text"} placeholder="Number On Card"/></div>
                        <div className="second-div-card">
                            <div ><input type={"text"} className="sec-left" placeholder="Valid Thru(MM/YY)"/></div>
                            <div ><input type={"text"} className="sec-right" placeholder="CVV"/></div><br/><br/>
                        </div>
                        <button className="btn-card-row">PLACE ORDER</button>
                    </div>
                        :<h1></h1>
                    }
                    {
                        (upi)?<div>
                            <h6>Pay Using UPL</h6>
                            <div className="main-upi">
                            <div><input className="upi-payment" type={"radio"} name="payment"/>Phone Pay</div>
                            <div><input className="upi-payment" type={"radio"} name="payment"/>Google Pay</div>
                            <div><input className="upi-payment" type={"radio"} name="payment"/>Enter UPI Id</div>
                            </div>
                            
                        </div>:<h1></h1>
                    }
                    {
                        (net)?<div>
                            <h6>Pay Using UPL</h6>
                            <div className="main-upi">
                            <div><input className="upi-payment" type={"radio"} name="payment"/>Axis Bank</div>
                            <div><input className="upi-payment" type={"radio"} name="payment"/>HDFC Bank</div>
                            <div><input className="upi-payment" type={"radio"} name="payment"/>ICIC Bank</div>
                            <div><input className="upi-payment" type={"radio"} name="payment"/>Kotak Bank</div>
                            </div>
                            
                        </div>:<h1></h1>
                    }
                </div>
                <div className="add-se-s"><>heading</></div>
            </div>
        </div>
    );
}

export default Address;