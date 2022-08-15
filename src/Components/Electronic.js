import { Link } from "react-router-dom";
function Electronic() {
    return ( 
        <>
            <div class="dropdown-content1">
                     <div className="main">
                     <div className="left">
                          <h6><Link  className="inner-link" to="#">HOME APPLIANCES</Link><br/></h6>
                        <Link  className="inner-link" to="#">Landline Phones</Link><br/>
                        <Link  className="inner-link" to="#">Sewing Machines</Link><br/>
                        <Link  className="inner-link" to="#">Home Security Systems</Link><br/>
                        <Link  className="inner-link" to="#">Microwaves & OTG</Link><br/>
                        <Link  className="inner-link" to="#">Air Freyes</Link><br/>
                        
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
                        <img className="img-hover" src="./electronic.jpg"/>
                      </div>
                     </div>
                      
                    </div>
        </>
     );
}

export default Electronic;