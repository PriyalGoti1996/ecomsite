import { Link } from "react-router-dom";
function Kitchen() {
    return ( 
        <>
            <div class="dropdown-content1">
                     <div className="main">
                     <div className="left">
                          <h6><Link  className="inner-link" to="#">KITCHEN APPLANCES</Link><br/></h6>
                        <Link  className="inner-link" to="#">Jucies Mixer Gundier</Link><br/>
                        <Link  className="inner-link" to="#">Water Purifier</Link><br/>
                        <Link  className="inner-link" to="#">Chiemneys</Link><br/>
                        <Link  className="inner-link" to="#">Roti Makers</Link><br/>
                        <Link  className="inner-link" to="#">Air Freyes</Link><br/>
                        <Link  className="inner-link" to="#">Electric cookers</Link><br/>
                      </div>
                      <div className="right">
                          <h6><Link  className="inner-link" to="#">HOME FURNISING</Link><br/></h6>
                        <Link  className="inner-link" to="#">Bad Linen</Link><br/>
                        <Link  className="inner-link" to="#">Bath Linen</Link><br/>
                        <Link  className="inner-link" to="#">Blancket&Quilts</Link><br/>
                        <Link  className="inner-link" to="#">Matrresses</Link><br/>
                        <Link  className="inner-link" to="#">Table Desks</Link><br/>
                        <Link  className="inner-link" to="#">Wall Decor</Link><br/>
                      </div>
                      <div className="last">
                        <img className="img-hover" src="./kitchen.jpg"/>
                      </div>
                     </div>
                      
                    </div>
        </>
     );
}

export default Kitchen;