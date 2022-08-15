import { Link } from "react-router-dom";
function Kids() {
    return ( 
        <>
            <div class="dropdown-content1">
                     <div className="main">
                     <div className="left">
                          <h6><Link  className="inner-link" to="#">TOYES</Link><br/></h6>
                        <Link  className="inner-link" to="#">ToysCare</Link><br/>
                        <Link  className="inner-link" to="#">ElectronicToys</Link><br/>
                        <Link  className="inner-link" to="#">Action Toys</Link><br/>
                        <Link  className="inner-link" to="#">Ride on&scooters</Link><br/>
                        <Link  className="inner-link" to="#">Salware&Lengginges</Link><br/>
                        <Link  className="inner-link" to="#">Educational Toys</Link><br/>
                      </div>
                      <div className="right">
                          <h6><Link  className="inner-link" to="#">BABY CARE</Link><br/></h6>
                        <Link  className="inner-link" to="#">Baby Mosquito Nets</Link><br/>
                        <Link  className="inner-link" to="#">Baby Carriers</Link><br/>
                        <Link  className="inner-link" to="#">Baby Strollers</Link><br/>
                        <Link  className="inner-link" to="#">Walkers</Link><br/>
                        <Link  className="inner-link" to="#">Feeding & Nursing</Link><br/>
                        <Link  className="inner-link" to="#">casual Shoes</Link><br/>
                      </div>
                      <div className="last">
                        <img className="img-hover" src="./kid1.jpg"/>
                      </div>
                     </div>
                      
                    </div>
        </>
     );
}

export default Kids;